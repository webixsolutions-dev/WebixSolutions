import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CalendarDays, Database, Globe2, Headphones, MapPin, MessageCircle, Phone, Send, Workflow } from "lucide-react";
import { HOME_CONTENT } from "@/content/home";
import { WorkflowDemo } from "./workflow-demo";

const sources = [
  { label: "Website", Icon: Globe2 },
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "Phone calls", Icon: Phone },
];
const destinations = [
  { label: "CRM", Icon: Database },
  { label: "Calendar", Icon: CalendarDays },
  { label: "Team handoff", Icon: Headphones },
];
const beams = [
  "M150 48 C275 48 292 144 450 144", "M150 144 H450", "M150 240 C275 240 292 144 450 144",
  "M450 144 C608 144 625 48 750 48", "M450 144 H750", "M450 144 C608 144 625 240 750 240",
];

const serviceDiagrams = {
  chatbot: [{ label: "Message", Icon: MessageCircle }, { label: "Answer", Icon: Workflow }, { label: "Handoff", Icon: Headphones }],
  voice: [{ label: "Call", Icon: Phone }, { label: "Qualify", Icon: Headphones }, { label: "Book", Icon: CalendarDays }],
  "lead-engine": [{ label: "Find", Icon: MapPin }, { label: "Draft", Icon: Send }, { label: "Review", Icon: Headphones }],
};

export function AiWorkflows() {
  return (
    <section id="ai-workflows" className="studio-section studio-ai" aria-labelledby="studio-ai-title">
      <div className="studio-wrap">
        <div className="studio-ai-lamp" data-studio-lamp>
          <div className="studio-ai-light" aria-hidden="true"><i /></div>
          <div className="studio-ai-heading" data-studio-reveal>
            <p className="studio-label"><span /> AI systems in production</p>
            <h2 id="studio-ai-title">Put AI to work<br />where enquiries come in.</h2>
            <p>Connect your website, WhatsApp and phone to the tools your team already uses. Automate the routine steps and hand off the conversations that need a person.</p>
          </div>
        </div>
        <div className="studio-ai-network" data-studio-network aria-label="Example AI workflow from enquiry channels to business tools">
          <svg viewBox="0 0 900 288" preserveAspectRatio="none" aria-hidden="true">
            {beams.map((path, index) => <g key={path}><path d={path} className="studio-ai-track" /><path d={path} pathLength="100" className={`studio-ai-beam studio-ai-beam-${index}`} /></g>)}
          </svg>
          <ul className="studio-ai-nodes" aria-label="Input channels">{sources.map(({ label, Icon }) => <li key={label}><Icon aria-hidden="true" size={18} /><span>{label}</span></li>)}</ul>
          <div className="studio-ai-hub"><Workflow size={27} aria-hidden="true" /><span>AI workflow</span></div>
          <ul className="studio-ai-nodes" aria-label="Connected tools">{destinations.map(({ label, Icon }) => <li key={label}><Icon aria-hidden="true" size={18} /><span>{label}</span></li>)}</ul>
        </div>
        <WorkflowDemo />
        <div className="studio-ai-cards" data-studio-stagger>
          {HOME_CONTENT.aiSystemsSection.systems.map((system, index) => (
            <article key={system.id} className="studio-ai-card" data-studio-spotlight>
              <div className="studio-ai-card-visual" aria-hidden="true">
                <span className="studio-ai-card-number">0{index + 1}</span>
                <div>{serviceDiagrams[system.id as keyof typeof serviceDiagrams].map(({ label, Icon }) => <span key={label}><Icon size={19} />{label}</span>)}</div>
              </div>
              <h3>{system.title}</h3>
              <p>{system.summary}</p>
              <Link href={system.href} className="studio-link">{system.id === "chatbot" ? "Explore AI chatbots" : "Explore AI automation"} <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
        <Link href="/ai-automation-services/" className="studio-button studio-button-outline studio-ai-cta">View AI automation services <ArrowDownRight size={17} /></Link>
      </div>
    </section>
  );
}
