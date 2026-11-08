"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function CanvasPlaceholder() {
  return <div className="studio-workflow-placeholder" aria-hidden="true" />;
}

const Blueprint = dynamic(() => import("@/components/ui/interactive-workflow-blueprint"), {
  ssr: false,
  loading: CanvasPlaceholder,
});

export function WorkflowDemo() {
  const section = useRef<HTMLDivElement>(null);
  const [nearby, setNearby] = useState(false);

  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setNearby(true);
      observer.disconnect();
    }, { rootMargin: "650px" });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return <div className="studio-workflow signal-card" data-studio-spotlight ref={section}>
    <div className="studio-workflow-heading">
      <p className="studio-label"><span /> Interactive workflow</p>
      <h3>Build an AI agent for new enquiries.</h3>
      <p>Try a lead intake flow in an n8n-style canvas. Change the path, add a step, and see where a sample enquiry lands.</p>
    </div>
    {nearby ? <Blueprint /> : <CanvasPlaceholder />}
  </div>;
}
