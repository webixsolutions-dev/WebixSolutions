import Image from "next/image";
import { ArrowUpRight, CalendarDays, Check, Globe2, Workflow } from "lucide-react";

export function HeroShowcase() {
  return (
    <div className="studio-showcase" data-hero-stage aria-hidden="true">
      <div className="showcase-orbit" />
      <div className="showcase-scene" data-hero-tilt>
        <div className="showcase-kicker"><span /> From first visit to booked job</div>
        <div className="showcase-window" data-hero-card>
          <div className="showcase-toolbar"><div><i /><i /><i /></div><span><Globe2 size={12} /> Service website</span><ArrowUpRight size={14} /></div>
          <div className="showcase-preview">
            <Image src="/images/studio/camz.webp" fill preload sizes="(max-width: 740px) 92vw, (max-width: 1050px) 50vw, 560px" alt="" />
            <div className="showcase-preview-copy"><span>Camz Cleaning</span><strong>A cleaner home.<br />An easier booking.</strong><span className="showcase-preview-action">Check availability <ArrowUpRight size={12} /></span></div>
          </div>
        </div>
        <div className="showcase-task" data-hero-card>
          <div className="showcase-task-title"><span className="showcase-task-icon"><Workflow size={17} /></span><div><strong>Customer journey</strong><span>Example workflow</span></div></div>
          <div className="showcase-task-row"><Globe2 size={15} /><span>Service enquiry</span><Check size={14} /></div>
          <div className="showcase-task-row"><CalendarDays size={15} /><span>Booking requested</span><Check size={14} /></div>
        </div>
        <div className="showcase-caption">Web experience <span>Project concept</span></div>
      </div>
    </div>
  );
}
