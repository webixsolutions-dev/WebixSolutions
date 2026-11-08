"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const BookingWidget = dynamic(() => import("./booking-widget").then((module) => module.BookingWidget), {
  loading: () => <p role="status">Opening the booking calendar…</p>,
});

export function BookingDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const path = usePathname();
  const [meetingType, setMeetingType] = useState<"strategy" | "intro" | "partner" | null>(null);

  useEffect(() => {
    function open(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href);
      const node = dialog.current;
      if (!node || url.origin !== location.origin || url.pathname !== "/book-a-call/" || path === "/book-a-call/") return;
      event.preventDefault();
      trigger.current = link.closest(".studio-nav-mobile")
        ? document.querySelector(".studio-nav-toggle")
        : link;
      const type = url.searchParams.get("type");
      setMeetingType(type === "partner" || type === "intro" ? type : "strategy");
      if (!node.open) {
        link.closest<HTMLDialogElement>("dialog")?.close();
        node.showModal();
        const bounds = node.getBoundingClientRect();
        node.style.setProperty("--iris-x", event.detail ? `${event.clientX - bounds.left}px` : "50%");
        node.style.setProperty("--iris-y", event.detail ? `${event.clientY - bounds.top}px` : "50%");
      }
    }
    document.addEventListener("click", open, true);
    return () => document.removeEventListener("click", open, true);
  }, [path]);

  return (
    <dialog ref={dialog} aria-labelledby="booking-dialog-title" className="booking-dialog" onClose={() => {
      setMeetingType(null);
      trigger.current?.focus();
    }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="booking-dialog-inner">
        <div className="booking-dialog-head"><div><p className="studio-label">Webix Solutions</p><h2 id="booking-dialog-title">Book a call</h2></div>
          <button type="button" aria-label="Close booking" onClick={() => dialog.current?.close()}><X size={22} /></button></div>
        {meetingType && <BookingWidget defaultMeetingType={meetingType} sourcePage={path} />}
      </div>
    </dialog>
  );
}
