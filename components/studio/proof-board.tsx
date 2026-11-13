import Link from "next/link";
import { ArrowUpRight, CalendarDays, Headphones, MessageCircle, Workflow } from "lucide-react";
import { ClientSlotTime } from "@/components/home/client-slot-time";
import type { GrowthSignalItem } from "@/content/home-proof";

/** Each proof tile gets a drawn graphic instead of a stock photo. */
function TileVisual({ id }: { id: string }) {
  if (id === "signal-ads") {
    // 8 x 8 dots: one dot per WhatsApp conversation in the reported campaign.
    return <div className="proof-visual proof-visual-dots" aria-hidden="true" />;
  }
  if (id === "signal-github") {
    return <div className="proof-visual proof-visual-grid" aria-hidden="true" />;
  }
  if (id === "signal-ai") {
    return (
      <div className="proof-visual proof-visual-flow" aria-hidden="true">
        <span><MessageCircle size={18} /></span>
        <span><Workflow size={18} /></span>
        <span><Headphones size={18} /></span>
      </div>
    );
  }
  return (
    <div className="proof-visual proof-visual-call" aria-hidden="true">
      <CalendarDays size={26} />
    </div>
  );
}

function TileLink({ href, label }: { href: string; label: string }) {
  const content = <>{label} <ArrowUpRight size={15} aria-hidden="true" /></>;
  return href.startsWith("/#")
    ? <a className="proof-tile-link" href={href.slice(1)}>{content}</a>
    : <Link className="proof-tile-link" href={href}>{content}</Link>;
}

export function ProofBoard({ signals, platforms, markets }: {
  signals: GrowthSignalItem[];
  platforms: readonly string[];
  markets: readonly string[];
}) {
  return (
    <div className="proof-board" role="region" aria-label="Proof at a glance">
      <div className="proof-board-head">
        <span><i aria-hidden="true" /> Proof at a glance</span>
        <span>Figures from our own work</span>
      </div>
      <div className="proof-board-grid">
        {signals.map((signal) => (
          <article key={signal.id} className="proof-tile" data-tile={signal.id.replace("signal-", "")}>
            <TileVisual id={signal.id} />
            <div className="proof-tile-copy">
              <p className="proof-tile-kicker">{signal.kicker}</p>
              {signal.metricValue && <strong className="proof-tile-metric">{signal.metricValue}</strong>}
              <h2>{signal.title}</h2>
              {signal.slotData?.slotIso && signal.slotData.easternTimeFormatted && (
                <ClientSlotTime slotIso={signal.slotData.slotIso} easternFallback={signal.slotData.easternTimeFormatted} />
              )}
              <p className="proof-tile-detail">{signal.detail}</p>
            </div>
            <div className="proof-tile-foot">
              <span>{signal.sourceLabel}</span>
              <TileLink href={signal.href} label={signal.linkLabel} />
            </div>
          </article>
        ))}
      </div>
      <dl className="proof-board-strip">
        <div><dt>Built on</dt><dd>{platforms.map((name) => <span key={name}>{name}</span>)}</dd></div>
        <div><dt>Clients in</dt><dd>{markets.map((name) => <span key={name}>{name}</span>)}</dd></div>
      </dl>
    </div>
  );
}
