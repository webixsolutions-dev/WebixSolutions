import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { SITE_FACTS } from "@/content/site-facts";

export const metadata: Metadata = buildMetadata({
  title: "Code of Conduct | Webix Solutions",
  description:
    "Code of conduct and operating principles for Webix Solutions team members: ethics, confidentiality, and AI development standards.",
  path: "/code-of-conduct/",
  noindex: true,
});

export default function CodeOfConductPage() {
  return (
    <LegalPageLayout
      title="Code of Conduct"
      kicker="Internal Ethics & Standards"
      lastUpdated="October 2026"
    >
      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">1. Purpose & Scope</h2>
        <p>
          This Code of Conduct outlines the ethical commitments and professional standards expected of every Webix Solutions employee, contractor, and leadership member. As an in-house engineering campus serving clients across international borders, our reputation is grounded in technical excellence, absolute honesty, and mutual respect.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">2. Client Confidentiality & Non-Disclosure</h2>
        <p>
          We operate under strict confidentiality. Client business metrics, private GitHub repositories, customer lists, CRM data, and commercial strategies must never be disclosed to third parties. For our agency white-label partners, we honor our unbranded guarantee: we never solicit or contact an agency&apos;s end-client without express written authorization.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">3. Responsible AI & Engineering Integrity</h2>
        <p>
          As an agency deploying advanced artificial intelligence systems, we adhere to strict engineering guardrails:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>No Unchecked AI Code:</strong> Every line of automated or AI-assisted code must be reviewed, typed, and verified by a senior software engineer prior to deployment.</li>
          <li><strong>Ethical Content Generation:</strong> We never generate deceptive synthetic media, impersonate real individuals without written consent, or fabricate fake online reviews.</li>
          <li><strong>Data Privacy in AI:</strong> Client intellectual property and sensitive customer data must never be submitted into public or non-private model training datasets.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">4. Workplace Culture & Equal Opportunity</h2>
        <p>
          We provide a safe, merit-based, and inclusive work environment at our Dunyapur campus and across remote shifts. Discrimination, harassment, or intimidation based on gender, ethnicity, religion, or background is strictly prohibited and subject to immediate termination.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">5. Shift Accountability & Communication</h2>
        <p>
          Our team coordinates across day and night operational shifts. Team members are expected to maintain punctual shift handoffs, communicate blockers proactively in Slack or ClickUp, and uphold our commitment to deliver clear written proposals in 48 hours.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">6. Reporting Ethical Violations</h2>
        <p>
          Any violation of this Code of Conduct should be reported confidentially to executive leadership via <a href="mailto:info@webixsolutions.com" className="text-[#C8101A] underline">info@webixsolutions.com</a>. Retaliation against any employee reporting an ethical violation in good faith will not be tolerated.
        </p>
      </section>
    </LegalPageLayout>
  );
}
