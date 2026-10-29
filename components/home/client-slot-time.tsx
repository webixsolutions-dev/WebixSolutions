"use client";

import * as React from "react";

export interface ClientSlotTimeProps {
  slotIso: string;
  /** Server-rendered Eastern Time fallback so crawlers and no-JS visitors read a real time */
  easternFallback: string;
}

export function ClientSlotTime({
  slotIso,
  easternFallback,
}: ClientSlotTimeProps) {
  const [localFormatted, setLocalFormatted] = React.useState<string | null>(
    null
  );
  const [visitorZone, setVisitorZone] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const date = new Date(slotIso);
      const dayStr = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(date);
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      }).format(date);
      setLocalFormatted(`${dayStr} · ${timeStr}`);
      setVisitorZone(tz);
    } catch {
      // Keep Eastern Time fallback
    }
  }, [slotIso]);

  return (
    <span className="inline-block">
      <span className="font-metric text-2xl md:text-3xl text-white block">
        {localFormatted ?? easternFallback}
      </span>
      <span className="text-xs text-[#A7ACB8] mt-1 block">
        {visitorZone
          ? `Displayed in your time zone (${visitorZone})`
          : "Displayed in Eastern Time (America/New_York)"}
      </span>
    </span>
  );
}
