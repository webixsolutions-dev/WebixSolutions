import { SITE_URL } from "@/config/seo";
import { SITE_FACTS } from "@/content/site-facts";
import { getPublishedServices } from "@/content/services";
import { getPublishedWorkEntries } from "@/content/work";
import { getPublishedBlogPosts } from "@/content/blog/posts";
import { getPublishedLocations } from "@/content/locations";
import { FLAGSHIP_OFFERS } from "@/content/pricing";

function page(label: string, path: string, summary?: string) {
  return `- [${label}](${SITE_URL}${path})${summary ? `: ${summary}` : ""}`;
}

export function buildLlmsText(full: boolean) {
  const { founder, headquarters, contact, canadaPartner } = SITE_FACTS;
  const services = getPublishedServices();
  const projects = getPublishedWorkEntries().filter((work) => !work.scopeOnly);
  const articles = getPublishedBlogPosts();
  const mainServices = [
    "web-design-development-service", "shopify-store-development-services", "custom-web-application-development",
    "custom-crm-development", "seo-services", "google-business-profile-optimization", "paid-advertising-services",
    "ai-automation-services", "ai-chatbot-development",
  ];

  return [
    "# Webix Solutions",
    "",
    `> ${SITE_FACTS.disambiguation}`,
    "",
    "## Company and contact",
    `- Founder and CEO: ${founder.name}`,
    `- Headquarters: ${headquarters.fullDisplay}`,
    `- Email: ${contact.email}`,
    `- Pakistan phone and WhatsApp: ${contact.phoneDisplay}`,
    `- Dubai phone: ${contact.uaePhoneDisplay}`,
    `- Auckland phone: ${contact.nzPhoneDisplay}`,
    `- ${canadaPartner.statement}`,
    page("About", "/about-us/"),
    page("Contact", "/contact-us/"),
    page("Book a strategy call", "/book-a-call/"),
    "",
    "## Services",
    ...services.filter((service) => full || mainServices.includes(service.slug))
      .map((service) => page(service.name, `/${service.slug}/`, service.shortOutcome)),
    page("All services", "/services/"),
    page("White-label delivery for agencies", "/white-label-partners/"),
    "",
    "## Pricing and packages",
    page("Pricing and payment terms", "/pricing/", "Project pricing is quoted in writing after scope is agreed. Clients pay advertising spend to their ad platforms."),
    page("Growth packages", "/offers/"),
    ...(full ? FLAGSHIP_OFFERS.map((offer) =>
      `- ${offer.name} (${offer.billingType === "monthly" ? "monthly support" : "one-time project"}): ${offer.confirmed ? offer.priceDisplay : "Custom quote"}. ${offer.whoItsFor}`) : []),
    "",
    "## Project examples",
    page("Portfolio", "/our-work/"),
    ...(full ? projects : projects.filter((work) =>
      ["camz-cleaning-booking", "jooblie", "zelvomart-ecommerce-platform", "webix-lead-desk"].includes(work.slug)))
      .map((work) => page(work.title, `/our-work/${work.slug}/`, work.summary)),
    ...(full ? [page("Custom restaurant ordering app", "/case-studio/developed-a-custom-mobile-app-for-a-local-food-restaurant/")] : []),
    "",
    "## Markets",
    ...getPublishedLocations().map((location) =>
      page(location.countryName, `/locations/${location.slug}/`, full ? location.timezoneSummary : undefined)),
    "",
    "## Guides",
    page("Webix Solutions Blog", "/blogs/"),
    ...(full ? articles : articles.filter((article) =>
      ["how-ai-search-engines-decide", "shopify-vs-woocommerce-vs-magento", "local-business-growth-strategy-for-more-customers"].includes(article.slug)))
      .map((article) => page(article.title, `/${article.slug}/`, full ? article.answerFirst : undefined)),
    ...(full ? [] : ["", "## Optional", page("Expanded company and service reference", "/llms-full.txt")]),
    "",
  ].join("\n");
}

export function llmsResponse(full: boolean) {
  return new Response(buildLlmsText(full), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
