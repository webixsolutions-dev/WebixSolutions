import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { SITE_FACTS } from "@/content/site-facts";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | Webix Solutions",
  description:
    "Terms and conditions for Webix Solutions: proposals, milestone payment terms, 100% intellectual property ownership transfer, and governing law.",
  path: "/terms-and-conditions/",
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      kicker="Commercial Terms"
      lastUpdated="October 2026"
    >
      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">1. Acceptance of Terms</h2>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to the {SITE_FACTS.domain} website and all digital marketing, custom software engineering, e-commerce development, and AI automation services provided by Webix Solutions (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By commissioning a proposal, engaging our team, or browsing our website, you agree to be bound by these Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">2. Written Proposals & Scope Validity</h2>
        <p>
          All service quotes, timelines, and technical architecture specifications are detailed in written Statements of Work (&ldquo;SOW&rdquo;) or proposals. Unless explicitly specified otherwise in writing, proposals are valid for 30 calendar days from the date of issuance. Any alterations to scope requested following project initiation will be documented in a mutual Change Order outlining impacts on budget and delivery milestones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">3. Payment Terms & Invoicing</h2>
        <p>We maintain standard commercial payment schedules designed to safeguard both parties:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Fixed-Price Builds & One-Time Projects:</strong> Commenced upon receipt of a 40% initial commitment deposit. Subsequent payments are tied directly to agreed milestones (e.g. 30% upon staging demo approval, 30% upon final production deployment).</li>
          <li><strong>Monthly Retainers & Growth Packages:</strong> Invoiced in advance on a recurring monthly cycle. Invoices are payable within 7 business days of issuance.</li>
          <li><strong>Third-Party Ad Spend:</strong> Ad spend on Meta, Google, TikTok, or other media platforms is paid directly by the client to the advertising networks using the client&apos;s billing method. Agency management fees never include third-party ad spend.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">4. Intellectual Property & Code Ownership</h2>
        <p>
          <strong>You own everything we build for you.</strong> Upon receipt of full payment for the applicable milestones:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>All custom code, custom designs, graphic assets, database schemas, and proprietary copywriting created specifically for your project transfer 100% to your organization.</li>
          <li>All third-party open-source libraries (e.g. Next.js, React, Tailwind CSS) remain subject to their respective open-source licenses (MIT, Apache 2.0).</li>
          <li>We retain zero claim over your domain names, hosting accounts, Google Analytics data, or Meta ad accounts.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">5. Client Responsibilities & Approvals</h2>
        <p>
          Timely delivery depends on mutual collaboration. The client agrees to provide necessary brand assets, API credentials, copy feedback, and milestone reviews within reasonable timeframes. Milestone approval must be provided in writing (email or Slack/WhatsApp confirmation).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">6. Post-Launch Warranty & Maintenance</h2>
        <p>
          Every custom web or app build includes 30 days of post-launch technical warranty covering bug fixes and browser compatibility adjustments directly related to the contracted scope. Ongoing security patching, software upgrades, and server monitoring beyond the warranty period require an active Monthly Care Plan.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, data, or business interruption). Our total aggregate liability under any agreement shall not exceed the total fees paid by the client to Webix Solutions in the three (3) months preceding the incident.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">8. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Pakistan. The parties agree to make good-faith efforts to resolve any disputes amicably through executive negotiations before pursuing formal arbitration in Dunyapur or Lahore, Punjab, Pakistan.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">9. Contact Information</h2>
        <p>Questions regarding these commercial terms should be directed to:</p>
        <div className="p-4 rounded-md bg-[#F9FAFB] border border-[#E4E6EB] text-xs space-y-1">
          <div><strong>Webix Solutions Commercial Operations</strong></div>
          <div>Email: <a href="mailto:info@webixsolutions.com" className="text-[#C8101A] underline">info@webixsolutions.com</a></div>
          <div>Headquarters: {SITE_FACTS.headquarters.fullDisplay}</div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
