import { buildMetadata, SITE_URL } from "@/config/seo";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { BookingWidget } from "@/components/booking/booking-widget";
import { SITE_FACTS } from "@/content/site-facts";
import { ShieldCheck, Clock, FileText, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/social-icons";

export const metadata = buildMetadata({
  title: "Book a Strategy Call | Webix Solutions",
  description:
    "Book a free 30-minute strategy call with Webix Solutions. Direct scheduling in your time zone with an instant Google Meet link and scope quote in 48 hours.",
  path: "/book-a-call/",
});

const FAQ_ITEMS = [
  {
    q: "Is the strategy call completely free?",
    a: "Yes, 100% free with zero obligation. We evaluate your current website, SEO rankings, ad accounts, or AI automation needs, and share practical technical recommendations directly.",
  },
  {
    q: "Who will I actually speak with on the call?",
    a: "You speak directly with Haroon Sukhera or our senior technical department leads — never an aggressive junior SDR. We dive straight into the code, architecture, or ad data.",
  },
  {
    q: "What happens after our call?",
    a: "Within 48 hours, we deliver a concise written proposal outlining the exact scope, milestones, turnaround timeline, and guaranteed fixed pricing.",
  },
  {
    q: "What if I cannot find a slot that fits my timezone?",
    a: "We operate dedicated day and night shifts covering Canada (ET/PT), the United States, the UAE (GST), New Zealand (NZST), and Pakistan. If you need a custom slot, message us directly on WhatsApp.",
  },
];

export default function BookACallPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Book a Strategy Call",
    description:
      "Schedule a 30-minute strategy call, 15-minute intro, or white-label partner meeting with Webix Solutions.",
    url: `${SITE_URL}/book-a-call/`,
    publisher: {
      "@type": "Organization",
      name: SITE_FACTS.brandName,
      url: `${SITE_URL}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero & Calendar Section on Graphite */}
      <Section surface="graphite" className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mb-10 space-y-4">
            <Kicker>Direct scheduling · Instant Google Meet</Kicker>
            <h1 className="type-display text-white">
              Book a Strategy Call with Our Senior Leads
            </h1>
            <p className="type-lead text-[#9CA3AF]">
              Select a time that suits you. Calendar slots are calculated in your local time zone across our coordinated North American, Gulf and Pakistan shifts.
            </p>
          </div>

          {/* Main Booking Calendar Widget */}
          <BookingWidget variant="full" sourcePage="Book a Call Page" />

          {/* Three Commitments Banner */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-white">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="h-5 w-5 text-[#ED1C24] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Zero Sales Pressure</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Engineers and marketers only. We evaluate feasibility and honest fit, never high-pressure sales scripts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="h-5 w-5 text-[#ED1C24] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Timezone Aligned</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Day and night shifts covering Toronto, Vancouver, Los Angeles, Dubai, Auckland, and Pakistan seamlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <FileText className="h-5 w-5 text-[#ED1C24] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Written Scope in 48h</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Following the call, receive an itemized proposal with deliverables, milestones, and fixed pricing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ & Direct Contact on Steel */}
      <Section surface="steel" notch>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: FAQ */}
            <div className="lg:col-span-7 space-y-6">
              <Kicker>Frequently asked questions</Kicker>
              <h2 className="type-h2 text-white">
                Everything you need to know about the strategy call
              </h2>

              <div className="space-y-4 pt-2">
                {FAQ_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="cut-tr-sm border border-white/10 bg-white/[0.03] p-5 space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#ED1C24] flex-shrink-0 mt-1" />
                      <h3 className="font-semibold text-sm text-white">
                        {item.q}
                      </h3>
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed pl-6.5">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Instant WhatsApp Fallback Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="cut-tr-lg border border-white/15 bg-[#121214] p-6 md:p-8 space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
                  Need faster turnaround?
                </div>
                <h3 className="type-h3 text-white">
                  Message Haroon directly on WhatsApp
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  If your project has an urgent deadline or you prefer a quick voice note discussion, our founder is reachable directly during operational hours.
                </p>

                <div className="pt-2">
                  <a
                    href={SITE_FACTS.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full h-12 items-center justify-center gap-2.5 cut-tr-sm bg-[#16A34A] hover:bg-[#15803D] px-6 text-sm font-semibold text-white transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp {SITE_FACTS.contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs text-[#9CA3AF] space-y-1">
                  <div>• Direct response typically under 30 minutes</div>
                  <div>• Available on Eastern, Gulf and PK business hours</div>
                  <div>• Email: {SITE_FACTS.contact.email}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
