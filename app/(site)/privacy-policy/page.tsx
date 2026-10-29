import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { SITE_FACTS } from "@/content/site-facts";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Webix Solutions",
  description:
    "Privacy policy for Webix Solutions: how we collect, store, and process personal data in compliance with PIPEDA, GDPR, CCPA, PDPL, and NZ Privacy Act.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      kicker="Data Protection & Privacy"
      lastUpdated="October 2026"
    >
      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">1. Overview & Data Controller</h2>
        <p>
          Webix Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an in-house digital marketing, web engineering, and AI automation agency headquartered in {SITE_FACTS.headquarters.fullDisplay}. We respect your fundamental right to privacy and are committed to safeguarding personal data in transparent compliance with global privacy standards, including:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Canada:</strong> Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
          <li><strong>United States:</strong> California Consumer Privacy Act (CCPA / CPRA) and applicable state laws</li>
          <li><strong>European Union / UK:</strong> General Data Protection Regulation (GDPR / UK GDPR)</li>
          <li><strong>United Arab Emirates:</strong> Personal Data Protection Law (Federal Decree Law No. 45/2021)</li>
          <li><strong>New Zealand:</strong> Privacy Act 2020</li>
          <li><strong>Pakistan:</strong> Prevention of Electronic Crimes Act (PECA 2016) and applicable regulations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">2. Personal Information We Collect</h2>
        <p>We collect personal information directly when you interact with our website, schedule meetings, or enter into client agreements:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Contact & Identity Details:</strong> Full name, corporate email address, WhatsApp/phone number, job title, and company name.</li>
          <li><strong>Project & Consultation Data:</strong> Website URL, target marketing goals, estimated monthly budgets, technical preferences, and recorded notes from strategy sessions.</li>
          <li><strong>Automated Usage & Device Information:</strong> Anonymized IP addresses, browser user agent, referral URLs, time zone preferences, and interaction metrics gathered through analytics cookies.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">3. Named Third-Party Data Processors</h2>
        <p>We partner only with enterprise-grade data processors that maintain verified security certifications (SOC 2, ISO 27001) to run our agency operations:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border border-[#E4E6EB] divide-y divide-[#E4E6EB]">
            <thead className="bg-[#F9FAFB] text-[#111215] font-semibold">
              <tr>
                <th className="p-2.5">Processor</th>
                <th className="p-2.5">Purpose</th>
                <th className="p-2.5">Location / Certification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E6EB]">
              <tr>
                <td className="p-2.5 font-medium">Google Workspace & Calendar</td>
                <td className="p-2.5">Video strategy calls (Google Meet), email hosting, calendar availability queries</td>
                <td className="p-2.5">US / Global (SOC 2 / ISO 27001)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Cloudflare Inc.</td>
                <td className="p-2.5">Bot mitigation (Turnstile), global DNS routing, edge caching</td>
                <td className="p-2.5">US / Global (SOC 2 Type II)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Resend Inc.</td>
                <td className="p-2.5">Transactional email delivery for contact forms and inquiries</td>
                <td className="p-2.5">US (SOC 2 compliant)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Google Analytics 4 & Meta CAPI</td>
                <td className="p-2.5">Consent-gated website traffic and ad attribution analysis</td>
                <td className="p-2.5">US / Global (Privacy Shield / DPA)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Microsoft Clarity</td>
                <td className="p-2.5">Session recording & heatmap analytics (masked sensitive inputs)</td>
                <td className="p-2.5">US / Global (GDPR compliant)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">4. Cookie Consent & Analytics Controls</h2>
        <p>
          Our website deploys an explicit cookie consent banner. Non-essential tracking scripts—including Google Analytics 4, Meta Pixel, and Microsoft Clarity—are completely disabled until you grant informed consent. You can modify your preferences at any time via our Cookie Policy settings or through your browser settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">5. Data Retention Schedules</h2>
        <p>We retain personal information only for the duration necessary to satisfy commercial purposes:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Sales Inquiries & Form Submissions:</strong> Retained for 12 months, after which unengaged leads are permanently purged.</li>
          <li><strong>Client Deliverables & Contract Records:</strong> Retained for 24 months post-contract completion for accounting, tax compliance, and warranty monitoring.</li>
          <li><strong>Analytics Logs:</strong> Google Analytics 4 user-level data is configured to automatically expire after 14 months.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">6. International Cross-Border Data Transfers</h2>
        <p>
          Because our engineering headquarters is located in Pakistan and our clients reside in Canada, the US, the UAE, New Zealand, and globally, personal data is processed across borders. We employ Standard Contractual Clauses (SCCs), robust encryption in transit (TLS 1.3) and at rest (AES-256), and contractual data protection agreements to ensure cross-border security parity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">7. Your Legal Privacy Rights</h2>
        <p>Depending on your jurisdiction, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Access, correct, or obtain a machine-readable copy of your personal data.</li>
          <li>Request deletion (the &ldquo;right to be forgotten&rdquo;) of your records.</li>
          <li>Object to or restrict specific processing operations.</li>
          <li>Withdraw previously given consent at any time without punitive consequences.</li>
          <li>Lodge a complaint with your regional data protection commissioner or supervisory authority.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">8. Security Safeguards & Breach Notification</h2>
        <p>
          We implement rigorous technical safeguards including multi-factor authentication (MFA) across all staff systems, strict least-privilege role-based access, and repository security scanning. In the unlikely event of a verified data breach impacting your rights, we will notify affected individuals and regulatory authorities within 72 hours of verification.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">9. Privacy Contact & Complaints</h2>
        <p>
          To exercise your privacy rights or submit a question regarding our practices, contact our Data Protection Officer:
        </p>
        <div className="p-4 rounded-md bg-[#F9FAFB] border border-[#E4E6EB] text-xs space-y-1">
          <div><strong>Webix Solutions Privacy Office</strong></div>
          <div>Email: <a href="mailto:info@webixsolutions.com" className="text-[#C8101A] underline">info@webixsolutions.com</a></div>
          <div>Headquarters: {SITE_FACTS.headquarters.fullDisplay}</div>
          <div>Phone: {SITE_FACTS.contact.phoneDisplay}</div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
