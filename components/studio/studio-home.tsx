import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Plus, Sparkle } from "lucide-react";
import { getMegaMenuColumns } from "@/content/navigation";
import type { NextSlotResult } from "@/lib/booking/next-slot";
import { ServicesTabs } from "@/components/home/services-tabs";
import { AiWorkflows } from "./ai-workflows";
import { StudioPackages, StudioProofWall } from "./home-proof-sections";
import { HOME_CONTENT } from "@/content/home";
import { SITE_FACTS } from "@/content/site-facts";
import { STUDIO } from "@/content/studio";
import { getPublishedWorkEntries } from "@/content/work";
import { MarketGlobe } from "./market-globe";
import { ProjectCover } from "./project-cover";
import { HeroShowcase } from "./hero-showcase";

export function StudioHome({ nextSlot }: { nextSlot: NextSlotResult }) {
  const projects = getPublishedWorkEntries();
  const featured = ["camz-cleaning-booking", "jooblie", "walshkon-consultants", "zelvomart-ecommerce-platform", "custom-crm-agency-operations", "us-contractor-websites", "webix-lead-desk"]
    .flatMap((slug) => projects.filter((project) => project.slug === slug));
  const proof = SITE_FACTS.stats;
  const ways = HOME_CONTENT.twoWays;
  return (
    <>
      <section className="studio-hero" data-studio-spotlight data-studio-light>
        <div className="studio-wrap studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="studio-label" data-hero-intro><span /> Full-service digital agency</p>
            <h1>{STUDIO.headline.map((line, index) => <span className="studio-line-mask" key={line}><span data-studio-hero-line>{line}{index < STUDIO.headline.length - 1 ? " " : ""}</span></span>)}</h1>
            <p className="studio-hero-lead" data-hero-intro>{STUDIO.lead}</p>
            <div className="studio-actions" data-hero-ctas="true" data-hero-intro>
              <Link href="/book-a-call/" className="studio-button">Book a strategy call <ArrowUpRight size={17} /></Link>
              <a href="#selected-work" className="studio-button studio-button-outline">Explore our work <ArrowDown size={16} /></a>
            </div>
          </div>
          <HeroShowcase nextSlot={nextSlot} platforms={STUDIO.heroPlatforms} markets={SITE_FACTS.markets.map((market) => market.name)} />
          <div className="studio-hero-index"><a href="#studio-proof-title"><ArrowDown size={15} /> Scroll to explore</a><span>{STUDIO.heroNote}</span></div>
        </div>
      </section>
      <section className="studio-proof" aria-labelledby="studio-proof-title" data-studio-proof-band data-studio-light>
        <div className="studio-proof-ribbon" aria-hidden="true">
          <div className="studio-proof-ribbon-track" data-studio-proof-track>
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index}>
                {["Web & commerce", "Search & paid media", "CRM & portals", "AI automation", "White-label delivery"].map((label) => (
                  <span key={label}>{label}<Sparkle size={13} /></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="studio-wrap studio-proof-content">
          <div className="studio-proof-heading" data-studio-reveal>
            <h2 id="studio-proof-title">The work behind Webix.</h2>
            <p>What our team has delivered for businesses and agency partners.</p>
          </div>
          <div className="studio-proof-grid" data-studio-stagger>
            {[proof.websitesDelivered, proof.totalClientsServed, proof.teamSize, proof.socialAccountsManaged].map((item) => (
              <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
            ))}
          </div>
        </div>
        <div className="studio-proof-wordmark" data-studio-proof-mark aria-hidden="true">WEBIX</div>
      </section>
      <section className="studio-section studio-light" id="selected-work" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div><p className="studio-label"><span /> Selected projects</p><h2>See what we’ve built.</h2></div>
            <Link className="studio-link" href="/our-work/">View all projects <ArrowUpRight size={18} /></Link>
          </div>
          <div className="studio-bento" data-studio-gallery>
            {featured.map((study, index) => (
              <Link key={study.slug} href={`/our-work/${study.slug}/`} className={`studio-project studio-project-${index} studio-cut-frame`} data-studio-project>
                <ProjectCover study={study} />
                <div className="studio-project-copy"><p>{study.descriptor}</p><h3>{study.title}</h3><span className="studio-project-arrow"><ArrowUpRight size={20} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section studio-dark studio-services-section" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div><h2>Where we can help.</h2><p className="studio-section-lead">From the page a customer lands on to the tools your team uses after they get in touch.</p></div>
            <Link className="studio-link" href="/services/">Browse all services <ArrowUpRight size={17} /></Link>
          </div>
          <ServicesTabs columns={getMegaMenuColumns()} />
        </div>
        <div className="studio-platform-window"><div className="studio-platforms" data-studio-marquee>{[...STUDIO.platforms, ...STUDIO.platforms].map((name, index) => <span key={`${name}-${index}`} aria-hidden={index >= STUDIO.platforms.length}>{name}</span>)}</div></div>
      </section>
      <AiWorkflows />
      <StudioPackages />
      <section className="studio-section studio-light studio-process-section" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal><div><h2>From brief to launch.</h2></div><Link className="studio-link" href="/offers/">Explore packages <ArrowUpRight size={18} /></Link></div>
          <ol className="studio-process" data-studio-stagger>{STUDIO.process.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
        </div>
      </section>
      <section className="studio-section studio-audience-section" data-studio-light>
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div><p className="studio-label"><span /> {ways.kicker}</p><h2>{ways.h2}</h2></div>
          </div>
          <div className="studio-audiences" data-studio-stagger>
            {[ways.forBusinesses, ways.forAgencies].map((item, index) => (
              <article className="studio-cut-frame" key={item.badge}>
                <p className="studio-label studio-chip">{item.badge}</p><h3>{item.title}</h3><p>{item.description}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><Check size={16} aria-hidden="true" />{bullet}</li>)}</ul>
                <Link href={item.ctaHref} className={index === 0 ? "studio-button" : "studio-button studio-button-outline"}>{item.ctaLabel} <ArrowUpRight size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section studio-dark studio-market-section" id="our-markets" data-studio-light>
        <div className="studio-wrap studio-market-grid">
          <div data-studio-reveal><p className="studio-label"><span /> Where we work</p><h2>Based in Pakistan. Working worldwide.</h2><p className="studio-section-lead">We plan calls and handovers around your time zone. Explore how we work in <Link className="underline underline-offset-4" href="/locations/canada/">Canada</Link>, the <Link className="underline underline-offset-4" href="/locations/united-states/">United States</Link>, the <Link className="underline underline-offset-4" href="/locations/uae/">United Arab Emirates</Link>, <Link className="underline underline-offset-4" href="/locations/new-zealand/">New Zealand</Link> and <Link className="underline underline-offset-4" href="/locations/pakistan/">Pakistan</Link>.</p></div>
          <MarketGlobe />
        </div>
      </section>
      <StudioProofWall />
      <section className="studio-section studio-light studio-questions" id="project-questions" data-studio-light>
        <div className="studio-wrap studio-question-grid">
          <aside data-studio-reveal>
            <h2>Good questions to ask first.</h2>
            <p>Get a feel for how we scope, build and hand over a project.</p>
            <Link href="/contact-us/" className="studio-link">Ask us about your project <ArrowUpRight size={17} /></Link>
          </aside>
          <div className="studio-faq" data-studio-stagger>
            {STUDIO.faqs.map((item, index) => <details name="studio-project-questions" key={item.question}>
              <summary><span className="studio-faq-number">0{index + 1}</span><span>{item.question}</span><Plus size={19} aria-hidden="true" /></summary>
              <div className="studio-faq-answer"><p>{item.answer}</p></div>
            </details>)}
          </div>
        </div>
      </section>
    </>
  );
}
