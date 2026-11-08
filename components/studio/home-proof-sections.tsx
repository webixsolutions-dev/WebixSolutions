import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE_FACTS } from "@/content/site-facts";
import { FLAGSHIP_OFFERS } from "@/content/pricing";
import { getVerifiedTestimonials } from "@/content/testimonials";

const featuredOffers = new Set(["launch-kit", "growth-engine", "ai-automation-sprint"]);

export function StudioPackages() {
  const offers = FLAGSHIP_OFFERS.filter((offer) => featuredOffers.has(offer.id));
  return (
    <section className="studio-section studio-dark" id="packages">
      <div className="studio-wrap">
        <div className="studio-section-head" data-studio-reveal>
          <div><p className="studio-label"><span /> Packages</p><h2>Pick a starting point.</h2><p className="studio-section-lead">Launch a website, grow month to month, or automate a specific workflow.</p></div>
          <Link className="studio-link" href="/offers/">Compare all packages <ArrowUpRight size={17} /></Link>
        </div>
        <div className="studio-packages" data-studio-stagger>
          {offers.map((offer) => <article key={offer.id} className="studio-package" data-studio-spotlight data-featured={Boolean(offer.featured)}>
            <div className="studio-package-top">
              <p className="studio-package-type">{offer.billingType === "monthly" ? "Monthly support" : "One-time project"}</p>
              {offer.featured && <span>Featured</span>}
            </div>
            <h3>{offer.name}</h3>
            <p className="studio-package-price">{offer.confirmed ? offer.priceDisplay : "Custom quote"}</p><p>{offer.whoItsFor}</p>
            <ul>{offer.inclusions.map((inclusion) => <li key={inclusion}><Check aria-hidden="true" size={16} />{inclusion}</li>)}</ul>
            <div className="studio-package-footer">
              <Link href="/book-a-call/" className={offer.featured ? "studio-button" : "studio-button studio-button-outline"}>Book a strategy call <ArrowUpRight size={15} /></Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export function StudioProofWall() {
  const testimonials = getVerifiedTestimonials();
  const brands = SITE_FACTS.ownBrands.filter((brand) => brand.confirmed);
  return (
    <section className="studio-section studio-light studio-proof-wall" id="proof">
      <div className="studio-wrap">
        <div className="studio-section-head" data-studio-reveal>
          <div><h2>What we build and run.</h2><p>Explore the platforms we operate and the engineering behind our work.</p></div>
          <a className="studio-link" href={SITE_FACTS.socials.github} target="_blank" rel="noreferrer">View GitHub activity <ArrowUpRight size={16} /></a>
        </div>
        <div className="studio-owned-brands" data-studio-stagger>
          {brands.map((brand) => <article key={brand.name} className="studio-owned-brand">
            <p className="studio-label">{brand.market}</p><h3>{brand.name}</h3><p>{brand.description}</p>
            {"url" in brand && <a href={brand.url} className="studio-link" target="_blank" rel="noreferrer">Visit platform <ArrowUpRight size={15} /></a>}
          </article>)}
        </div>
        {testimonials.length >= 3 && <div className="studio-owned-brands studio-testimonials">
          {testimonials.map((item) => <figure className="studio-owned-brand" key={item.id}><blockquote>{item.quote}</blockquote><figcaption>{item.name}, {item.company}</figcaption></figure>)}
        </div>}
      </div>
    </section>
  );
}
