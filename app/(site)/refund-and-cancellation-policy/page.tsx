import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { SITE_FACTS } from "@/content/site-facts";

export const metadata: Metadata = buildMetadata({
  title: "Refund and Cancellation Policy | Webix Solutions",
  description:
    "Refund and cancellation terms for Webix Solutions: milestone refund schedules, monthly retainer notices, and package minimum term guidelines.",
  path: "/refund-and-cancellation-policy/",
});

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      kicker="Commercial Guarantees"
      lastUpdated="October 2026"
    >
      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">1. General Principles</h2>
        <p>
          At Webix Solutions, we prioritize transparent client communication and fair commercial terms. Because custom software engineering, digital marketing management, and AI system implementations involve dedicated allocation of senior technical hours, refunds and cancellations are governed by clear milestone-based criteria.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">2. One-Time Builds & Custom Projects</h2>
        <p>Custom websites, mobile applications, and software development projects operate under milestone billing:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Initial Commitment Deposit (40%):</strong> Covers technical scoping, architecture design, and sprint capacity allocation. Deposits are fully refundable within 7 calendar days of signing provided engineering work has not officially commenced. Once discovery and UI design sprints have begun, deposits become non-refundable.</li>
          <li><strong>Milestone Payments:</strong> Once a project milestone (e.g. Staging Demo, Core Feature Set) has been demonstrated, reviewed, and approved by the client in writing, the associated milestone fee is earned and non-refundable.</li>
          <li><strong>Project Cancellation:</strong> If a client elects to terminate a project before full completion, the client is billed only for work completed up to the date of cancellation. All intellectual property, code repositories, and design files produced up to that date will be transferred to the client upon settlement of the balance.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">3. Monthly Care Plans & Retainers</h2>
        <p>Ongoing website maintenance, SEO retainers, and paid media management services operate on recurring monthly cycles:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Notice Period:</strong> Standard monthly care plans can be cancelled at any time by providing 30 days written notice prior to the next billing date.</li>
          <li><strong>Mid-Month Cancellations:</strong> Monthly retainer fees paid in advance are non-refundable for the active billing cycle; services remain fully active through the final day of the paid cycle.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">4. Flagship Growth Packages (/offers/)</h2>
        <p>
          Our Growth Engine packages ($399/month, $799/month) include extensive upfront setup—such as complete website redesigns, conversion tracking integration, and multi-channel ad setups—at heavily subsidized rates in exchange for a committed campaign horizon:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Minimum Term:</strong> Growth Engine retainers have a 6-month minimum term commitment to allow adequate time for algorithmic ad optimization and organic search growth.</li>
          <li><strong>Early Termination:</strong> If a client terminates prior to the conclusion of the minimum term, the standard early exit fee equals 50% of the remaining contracted term. Following the 6-month minimum, agreements transition to a standard month-to-month basis with 30 days written notice.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">5. Third-Party Media Spend</h2>
        <p>
          Ad spend paid directly to Meta Ads, Google Ads, TikTok Ads, or third-party SaaS subscriptions (hosting, domain registrars, OpenAI API tokens) is governed exclusively by the terms of those external providers. Webix Solutions cannot issue refunds for third-party media expenditures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">6. How to Submit a Cancellation Request</h2>
        <p>
          To request a project cancellation or discuss billing, contact our billing department in writing:
        </p>
        <div className="p-4 rounded-md bg-[#F9FAFB] border border-[#E4E6EB] text-xs space-y-1">
          <div><strong>Webix Solutions Finance & Operations</strong></div>
          <div>Email: <a href="mailto:info@webixsolutions.com" className="text-[#C8101A] underline">info@webixsolutions.com</a></div>
          <div>Response Time: Within one business day</div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
