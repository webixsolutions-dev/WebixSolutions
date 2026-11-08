import Link from "next/link";
import { ArrowUpRight, Check, GitFork } from "lucide-react";
import { SITE_FACTS } from "@/content/site-facts";
import { FLAGSHIP_OFFERS } from "@/content/pricing";
import { getPublishedWorkEntries } from "@/content/work";
import { getVerifiedTestimonials } from "@/content/testimonials";

const featuredOffers = new Set(["launch-kit", "growth-engine", "ai-automation-sprint"]);

export function StudioPackages() {
  const offers = FLAGSHIP_OFFERS.filter((offer) => featuredOffers.has(offer.id));
  return (
    <section className="studio-section studio-dark studio-packages-section" id="packages" data-studio-light>
      <div className="studio-wrap">
        <div className="studio-section-head" data-studio-reveal>
          <div><p className="studio-label"><span /> Packages</p><h2>Pick a starting point.</h2><p className="studio-section-lead">Launch a website, grow month to month, or automate a specific workflow.</p></div>
          <Link className="studio-link" href="/offers/">Compare all packages <ArrowUpRight size={17} /></Link>
        </div>
        <div className="studio-packages" data-studio-stagger>
          {offers.map((offer) => <article key={offer.id} className="studio-package studio-cut-frame" data-studio-spotlight data-featured={Boolean(offer.featured)}>
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
  const brands = SITE_FACTS.ownBrands.filter((brand) => brand.confirmed && brand.name !== "Miraj Builders");
  const builds = getPublishedWorkEntries().filter((entry) => ["camz-cleaning-booking", "jooblie"].includes(entry.slug));
  const { githubContributionsLastYear, customCodedBuilds, teamSize, cmsWebsitesBuilt, socialAccountsManaged } = SITE_FACTS.stats;

  return (
    <>
      <section className="studio-section studio-dark studio-engineering" aria-labelledby="studio-engineering-title" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div>
              <p className="studio-label"><span /> Verifiable engineering & delivery proof</p>
              <h2 id="studio-engineering-title">Measured by code shipped, sites launched and accounts managed</h2>
            </div>
          </div>
          <div className="studio-engineering-grid" data-studio-stagger>
            <article className="studio-engineering-card studio-cut-frame" data-studio-spotlight>
              <div className="studio-engineering-header"><span className="studio-chip"><GitFork size={16} aria-hidden="true" /> GitHub activity</span><span>October 2026 snapshot</span></div>
              <dl className="studio-engineering-metrics">
                {[githubContributionsLastYear, customCodedBuilds].map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
              </dl>
              <div className="studio-engineering-pattern" aria-hidden="true" />
              <div className="studio-engineering-footer">
                <ul aria-label="Technologies">{["Next.js", "React", "Node.js", "Flutter"].map((tool) => <li className="studio-chip" key={tool}>{tool}</li>)}</ul>
                <a className="studio-link" href={SITE_FACTS.socials.github} target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16} /></a>
              </div>
            </article>
            <article className="studio-engineering-card studio-cut-frame" data-studio-spotlight>
              <p className="studio-chip">Production team</p>
              <dl className="studio-engineering-scale">
                {[teamSize, cmsWebsitesBuilt, socialAccountsManaged].map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd><dd>{stat.detail}</dd></div>)}
              </dl>
              <Link className="studio-link" href="/about-us/">Meet the team & see how we work <ArrowUpRight size={16} /></Link>
            </article>
          </div>
        </div>
      </section>
      <section className="studio-section studio-light studio-proof-wall" id="proof" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div><h2>What we build and run.</h2><p>Explore our own platforms and selected client projects.</p></div>
            <Link className="studio-link" href="/our-work/">View all projects <ArrowUpRight size={16} /></Link>
          </div>
          <div className="studio-owned-brands" data-studio-stagger>
            {brands.map((brand) => <article key={brand.name} className="studio-owned-brand studio-cut-frame">
              <p className="studio-label">{brand.market} <span className="studio-chip">Our platform</span></p>
              <h3>{brand.name}</h3><p>{brand.description}</p>
              {"url" in brand && <a href={brand.url} className="studio-link" target="_blank" rel="noreferrer">Visit platform <ArrowUpRight size={15} /></a>}
            </article>)}
            {builds.map((build) => <article key={build.slug} className="studio-owned-brand studio-cut-frame">
              <p className="studio-label">{build.country || build.category} <span className="studio-chip">Client project</span></p>
              <h3>{build.title}</h3><p>{build.summary}</p>
              <Link href={`/our-work/${build.slug}/`} className="studio-link">View project <ArrowUpRight size={15} /></Link>
            </article>)}
          </div>
          {testimonials.length >= 3 && <div className="studio-owned-brands studio-testimonials">
            {testimonials.map((item) => <figure className="studio-owned-brand studio-cut-frame" key={item.id}><blockquote>{item.quote}</blockquote><figcaption>{item.name}, {item.company}</figcaption></figure>)}
          </div>}
        </div>
      </section>
    </>
  );
}
