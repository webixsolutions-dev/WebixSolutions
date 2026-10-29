"use client";

import * as React from "react";
import { MoveHorizontal } from "lucide-react";
import type { WorkBeforeAfter } from "@/content/work";

interface BeforeAfterSliderProps {
  data: WorkBeforeAfter;
}

export function BeforeAfterSlider({ data }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = React.useState<number>(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef<boolean>(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min((x / rect.width) * 100, 90));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#717684]">
          Interactive before / after transformation
        </span>
        <span className="text-xs text-[#717684]">
          Drag the slider left or right to compare
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden select-none border border-[#E4E6EB] shadow-xs cursor-ew-resize bg-[#141519]"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER PANEL (Right / Full background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E24] to-[#141519] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex items-center justify-end">
            <span className="px-3 py-1 rounded-full bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              After: Webix Build
            </span>
          </div>

          <div className="space-y-3 max-w-md ml-auto text-right">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">
              {data.afterMetric}
            </div>
            <h4 className="font-display text-base font-semibold text-[#16A34A]">
              {data.afterLabel}
            </h4>
            <p className="text-xs text-[#A7ACB8] leading-relaxed">
              {data.afterDescription}
            </p>
          </div>

          <div className="text-right text-[11px] font-mono text-[#A7ACB8]">
            Sub-2s LCP · 100% Owned GitHub Code
          </div>
        </div>

        {/* BEFORE PANEL (Left / Clipped by sliderPos) */}
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#F4F5F7] to-[#E4E6EB] p-6 sm:p-8 flex flex-col justify-between text-[#111215] overflow-hidden border-r-2 border-white shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="flex items-center justify-start min-w-[280px]">
            <span className="px-3 py-1 rounded-full bg-[#C8101A] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              Before: Legacy Stack
            </span>
          </div>

          <div className="space-y-3 max-w-md min-w-[280px]">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#C8101A]">
              {data.beforeMetric}
            </div>
            <h4 className="font-display text-base font-semibold text-[#111215]">
              {data.beforeLabel}
            </h4>
            <p className="text-xs text-[#454954] leading-relaxed">
              {data.beforeDescription}
            </p>
          </div>

          <div className="text-left text-[11px] font-mono text-[#717684] min-w-[280px]">
            Slow page builder · Hostage monthly fees
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div
          className="absolute inset-y-0 -ml-4 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="h-9 w-9 rounded-full bg-[#ED1C24] text-white flex items-center justify-center shadow-lg border-2 border-white">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
