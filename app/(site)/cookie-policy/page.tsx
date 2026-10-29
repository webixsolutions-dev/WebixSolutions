import type { Metadata } from "next";
import { buildMetadata } from "@/config/seo";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { SITE_FACTS } from "@/content/site-facts";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Webix Solutions",
  description:
    "Cookie policy for Webix Solutions: detailed explanation of essential, analytics, and marketing cookies, tracking purposes, and user consent controls.",
  path: "/cookie-policy/",
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      kicker="Cookies & Tracking"
      lastUpdated="October 2026"
    >
      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by websites you visit. They are widely used to ensure websites function securely, remember your user preferences (such as selected time zones), and provide anonymized performance telemetry.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">2. How We Use Cookies</h2>
        <p>
          Webix Solutions operates an explicit cookie consent mechanism. No non-essential or third-party marketing tracking cookies are loaded until you actively confirm your preferences via our consent banner.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">3. Detailed Cookie Classification</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border border-[#E4E6EB] divide-y divide-[#E4E6EB]">
            <thead className="bg-[#F9FAFB] text-[#111215] font-semibold">
              <tr>
                <th className="p-2.5">Category</th>
                <th className="p-2.5">Cookie Names</th>
                <th className="p-2.5">Purpose</th>
                <th className="p-2.5">Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E6EB]">
              <tr>
                <td className="p-2.5 font-semibold text-[#111215]">Strictly Necessary</td>
                <td className="p-2.5 font-mono">cf_clearance, __cf_bm, webix_consent</td>
                <td className="p-2.5">
                  Cloudflare bot mitigation, distributed denial-of-service protection, and storing your consent preferences.
                </td>
                <td className="p-2.5">Session to 12 months</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-[#111215]">Analytics (Consent-Gated)</td>
                <td className="p-2.5 font-mono">_ga, _ga_*, _gid</td>
                <td className="p-2.5">
                  Google Analytics 4 telemetry to measure aggregate page visits, bounce rates, and traffic sources without storing personal identifiers.
                </td>
                <td className="p-2.5">24 hours to 14 months</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-[#111215]">Performance (Consent-Gated)</td>
                <td className="p-2.5 font-mono">_clck, _clsk, CLID</td>
                <td className="p-2.5">
                  Microsoft Clarity heatmap and session analytics to detect broken UI elements or slow loading interactions. All sensitive keystrokes are automatically masked.
                </td>
                <td className="p-2.5">1 year</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-[#111215]">Marketing & Attribution</td>
                <td className="p-2.5 font-mono">_fbp, fr</td>
                <td className="p-2.5">
                  Meta Conversions API & Pixel cookies used strictly to evaluate the effectiveness of our verified paid social advertising campaigns.
                </td>
                <td className="p-2.5">90 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">4. Managing Your Cookie Preferences</h2>
        <p>
          You can adjust or revoke your cookie choices at any time:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Website Banner:</strong> Re-open the cookie banner from the footer link to toggle non-essential categories.</li>
          <li><strong>Browser Controls:</strong> Modern browsers allow you to block or delete cookies via settings (Chrome, Safari, Firefox, Edge).</li>
          <li><strong>Global Privacy Control:</strong> We respect browser-level Global Privacy Control (GPC) signals and automatically treat them as an opt-out from non-essential tracking.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="type-h3 text-[#111215]">5. Inquiries</h2>
        <p>For questions concerning our cookie management, email <a href="mailto:info@webixsolutions.com" className="text-[#C8101A] underline">info@webixsolutions.com</a>.</p>
      </section>
    </LegalPageLayout>
  );
}
