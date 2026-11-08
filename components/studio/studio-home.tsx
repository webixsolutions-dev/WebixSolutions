import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { SITE_FACTS } from "@/content/site-facts";
import { STUDIO } from "@/content/studio";
import { getPublishedWorkEntries } from "@/content/work";
import { MarketGlobe } from "./market-globe";
import { ProjectCover } from "./project-cover";
import { HeroShowcase } from "./hero-showcase";

export function StudioHome() {
  const projects = getPublishedWorkEntries();
  const featured = ["camz-cleaning-booking", "zelvomart-ecommerce-platform", "custom-crm-agency-operations"]
    .flatMap((slug) => projects.filter((project) => project.slug === slug));
  const proof = SITE_FACTS.stats;
  return (
    <>
      <section className="studio-hero">
        <div className="studio-wrap studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="studio-label" data-hero-intro><span /> Web design and digital systems</p>
            <h1>{STUDIO.headline.map((line) => <span className="studio-line-mask" key={line}><span data-studio-hero-line>{line}</span></span>)}</h1>
            <p className="studio-hero-lead" data-hero-intro>{STUDIO.lead}</p>
            <div className="studio-actions" data-hero-ctas="true" data-hero-intro>
              <Link href="/book-a-call/" className="studio-button">Book a strategy call <ArrowUpRight size={17} /></Link>
              <a href="#selected-work" className="studio-button studio-button-outline">Explore our work <ArrowDown size={16} /></a>
            </div>
          </div>
          <HeroShowcase />
          <div className="studio-hero-index"><a href="#selected-work"><ArrowDown size={15} /> Scroll to explore</a><span>{STUDIO.heroNote}</span></div>
        </div>
      </section>
      <section className="studio-proof" aria-label="Webix Solutions in numbers">
        <div className="studio-wrap studio-proof-grid">
          {[proof.cmsWebsitesBuilt, proof.totalClientsServed, proof.teamSize, proof.socialAccountsManaged].map((item) => (
            <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </div>
      </section>
      <section className="studio-section studio-light" id="selected-work">
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal>
            <div><p className="studio-label"><span /> Selected projects</p><h2>See what we’ve built.</h2></div>
            <Link className="studio-link" href="/our-work/">View all projects <ArrowUpRight size={18} /></Link>
          </div>
          <div className="studio-bento" data-studio-gallery>
            {featured.map((study, index) => (
              <Link key={study.slug} href={`/our-work/${study.slug}/`} className={`studio-project studio-project-${index}`} data-studio-project>
                <ProjectCover study={study} />
                <div className="studio-project-copy"><p>{study.descriptor}</p><h3>{study.title}</h3><span className="studio-project-arrow"><ArrowUpRight size={20} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section studio-dark">
        <div className="studio-wrap studio-service-grid">
          <div data-studio-reveal><h2>Where we can help.</h2><p className="studio-section-lead">From the page a customer lands on to the tools your team uses after they get in touch.</p><Link className="studio-link" href="/services/">Browse all services <ArrowUpRight size={17} /></Link></div>
          <div data-studio-stagger>{STUDIO.services.map((service) => <Link className="studio-service" key={service.number} href={service.href}>
            <span>{service.number}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div><ArrowUpRight size={20} />
          </Link>)}</div>
        </div>
        <div className="studio-platform-window"><div className="studio-platforms" data-studio-marquee>{[...STUDIO.platforms, ...STUDIO.platforms].map((name, index) => <span key={`${name}-${index}`} aria-hidden={index >= STUDIO.platforms.length}>{name}</span>)}</div></div>
      </section>
      <section className="studio-section studio-light">
        <div className="studio-wrap">
          <div className="studio-section-head" data-studio-reveal><div><h2>From brief to launch.</h2></div><Link className="studio-link" href="/offers/">Explore packages <ArrowUpRight size={18} /></Link></div>
          <ol className="studio-process" data-studio-stagger>{STUDIO.process.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
          <div className="studio-audiences" data-studio-stagger>{STUDIO.audiences.map((item) => <article key={item.label}><p className="studio-label">{item.label}</p><h3>{item.title}</h3><p>{item.detail}</p><Link href={item.href} className="studio-link">{item.action} <ArrowUpRight size={17} /></Link></article>)}</div>
        </div>
      </section>
      <section className="studio-section studio-dark studio-market-section" id="our-markets">
        <div className="studio-wrap studio-market-grid">
          <div data-studio-reveal><p className="studio-label"><span /> Where we work</p><h2>Based in Pakistan.<br />Working worldwide.</h2><p className="studio-section-lead">Our remote team works with clients in Canada, the United States, the United Arab Emirates, New Zealand and Pakistan. We plan calls and handovers around your time zone.</p></div>
          <MarketGlobe />
        </div>
      </section>
      <section className="studio-section studio-light studio-questions" id="project-questions">
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
