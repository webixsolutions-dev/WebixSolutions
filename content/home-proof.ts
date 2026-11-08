import { SITE_FACTS } from "@/content/site-facts";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface GrowthSignalItem {
  id: string;
  kicker: string;
  metricValue?: string;
  title: string;
  detail: string;
  sourceLabel: string;
  href: string;
  linkLabel: string;
  slotData?: NextSlotResult;
  confirmed: boolean;
  image: string;
}

export function getHomeProofSignals(nextSlot: NextSlotResult): GrowthSignalItem[] {
  const ad = SITE_FACTS.adResults.find((result) => result.id === "pkr-whatsapp-convs");
  const { githubContributionsLastYear: github } = SITE_FACTS.stats;
  const signals: GrowthSignalItem[] = [
    {
      id: "signal-ads",
      kicker: "Zelvomart e-commerce campaign",
      metricValue: ad?.metricValue,
      title: ad?.metricLabel ?? "Cost per WhatsApp conversation",
      detail: `${ad?.volume ?? ""} in the reported 30-day campaign for our own brand, Zelvomart.`,
      sourceLabel: "Meta Ads Manager",
      href: "/paid-advertising-services/",
      linkLabel: "Paid advertising services",
      confirmed: ad?.confirmed === true,
      image: "/images/studio/proof-ads-editorial.webp",
    },
    {
      id: "signal-ai",
      kicker: "AI systems in production",
      metricValue: "24/7",
      title: "AI reception that answers, qualifies and books",
      detail: "Website and WhatsApp chatbots, voice receptionists, and lead workflows that connect with your team.",
      sourceLabel: "Production AI workflows",
      href: "/#ai-workflows",
      linkLabel: "See AI workflows",
      confirmed: true,
      image: "/images/studio/proof-ai-editorial.webp",
    },
    {
      id: "signal-github",
      kicker: "Engineering activity",
      metricValue: github.value,
      title: `Contributions across ${github.repositoryCount} repositories`,
      detail: github.detail,
      sourceLabel: "Webix Solutions on GitHub",
      href: "/our-work/",
      linkLabel: "Explore our work",
      confirmed: github.confirmed,
      image: "/images/studio/proof-engineering-editorial.webp",
    },
    {
      id: "signal-slot",
      kicker: nextSlot.mode === "slot" ? "Next open strategy call" : "Talk to our team",
      title: "Free strategy call",
      detail: "Discuss your website, marketing or AI goals with our team in your time zone.",
      sourceLabel: `${nextSlot.durationMinutes}-minute video call`,
      href: "/book-a-call/",
      linkLabel: "Book this call",
      slotData: nextSlot,
      confirmed: true,
      image: "/images/studio/proof-booking-editorial.webp",
    },
  ];
  return signals.filter((signal) => signal.confirmed);
}
