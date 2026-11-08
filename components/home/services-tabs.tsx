"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useId, useRef, useState } from "react";
import type { MegaMenuColumn } from "@/content/navigation";

export function ServicesTabs({ columns }: { columns: MegaMenuColumn[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  return (
    <div className="studio-service-directory">
      <div role="tablist" aria-label="Service categories" className="studio-service-tabs"
        onKeyDown={(event) => {
          const index = event.key === "Home" ? 0 : event.key === "End" ? columns.length - 1 : event.key === "ArrowRight" ? (active + 1) % columns.length : event.key === "ArrowLeft" ? (active - 1 + columns.length) % columns.length : -1;
          if (index < 0) return;
          event.preventDefault();
          setActive(index);
          tabs.current[index]?.focus();
        }}>
        {columns.map((column, index) => <button ref={(button) => { tabs.current[index] = button; }} key={column.category} type="button" role="tab" id={`${id}-tab-${index}`}
          aria-selected={active === index} aria-controls={`${id}-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}>{column.heading}</button>)}
      </div>
      {columns.map((column, index) => (
        <div key={column.category} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={active !== index} className="studio-service-panel">
          {column.items.map((item) => (
            <Link className="studio-service" key={item.href} href={item.href}>
              <div><h3>{item.label}</h3>{item.description && <p>{item.description}</p>}</div><ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
