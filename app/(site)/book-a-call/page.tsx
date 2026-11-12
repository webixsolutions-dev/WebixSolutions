import { Check } from "lucide-react";
import { INTERIOR } from "@/content/interior";
import { BookingWidget } from "@/components/booking/booking-widget";
import { buildMetadata } from "@/config/seo";
import { SITE_FACTS } from "@/content/site-facts";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Book a Strategy Call | Webix Solutions",
  description: "Choose a date and time for a free call about your website, SEO, AI automation, custom CRM or white-label project.",
  path: "/book-a-call/",
});

export default function BookACallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Book a call", path: "/book-a-call/" }])) }} />
      <section className="studio-section studio-dark booking-page interior-booking-hero">
        <div className="studio-wrap studio-service-grid">
          <div>
            <p className="studio-label"><span /> Project enquiries</p>
            <h1 className="type-display">Book a strategy call</h1>
            <p className="studio-section-lead">{INTERIOR.booking.lead}</p>
            <ul className="interior-booking-agenda">
              {INTERIOR.booking.agenda.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="studio-section-lead">Need help booking? <a className="underline" href={`mailto:${SITE_FACTS.contact.email}`}>Email us</a>.</p>
          </div>
          <BookingWidget sourcePage="/book-a-call/" />
        </div>
      </section>
      <section className="studio-section studio-light">
        <div className="studio-wrap studio-service-grid">
          <h2>Before your call</h2>
          <div className="studio-faq">
            <details><summary>Is the strategy call free?</summary><p>Yes. Choose a free 30-minute strategy call, a quick introduction or a white-label partner call.</p></details>
            <details><summary>What should I bring?</summary><p>A link to your site or product, what you want to improve and any deadlines you already have are useful.</p></details>
            <details><summary>What happens after I reserve a time?</summary><p>We’ll email the meeting details. You can save the reserved time to your calendar from the booking confirmation screen.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
