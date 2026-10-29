"use client";

import * as React from "react";

export interface RoiCalculatorProps {
  defaultHours?: number;
  defaultRate?: number;
}

/**
 * Hours × hourly cost calculator (docs/03 /ai-automation-services/).
 * Pure arithmetic on the visitor's own inputs — no claims about savings achieved.
 * The default result is rendered on the server as plain text.
 */
export function RoiCalculator({ defaultHours = 25, defaultRate = 45 }: RoiCalculatorProps) {
  const [hours, setHours] = React.useState(defaultHours);
  const [rate, setRate] = React.useState(defaultRate);
  const monthly = hours * rate;
  const yearly = monthly * 12;
  const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

  return (
    <div className="cut-tr bg-[#141519] text-white p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-7">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-4 text-sm">
              <label htmlFor="roi-hours" className="font-medium">
                Hours spent on the task each month
              </label>
              <span className="font-metric text-lg text-white">{hours} h</span>
            </div>
            <input
              id="roi-hours"
              type="range"
              min={5}
              max={160}
              step={5}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-[#ED1C24] cursor-pointer"
            />
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-4 text-sm">
              <label htmlFor="roi-rate" className="font-medium">
                Cost of one hour of that time (USD)
              </label>
              <span className="font-metric text-lg text-white">{fmt(rate)}</span>
            </div>
            <input
              id="roi-rate"
              type="range"
              min={10}
              max={150}
              step={5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[#ED1C24] cursor-pointer"
            />
          </div>
        </div>

        <div
          className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10"
          aria-live="polite"
        >
          <div>
            <div className="text-sm text-[#A7ACB8]">Time cost per month</div>
            <div className="font-metric text-4xl md:text-5xl mt-1">{fmt(monthly)}</div>
          </div>
          <div>
            <div className="text-sm text-[#A7ACB8]">Time cost per year</div>
            <div className="font-metric text-2xl mt-1">{fmt(yearly)}</div>
          </div>
          <p className="text-sm text-[#A7ACB8] leading-relaxed">
            Example: {hours} hours a month at {fmt(rate)} an hour is {fmt(monthly)} a month, or{" "}
            {fmt(yearly)} a year, spent on work an automation could take over.
          </p>
        </div>
      </div>
    </div>
  );
}
