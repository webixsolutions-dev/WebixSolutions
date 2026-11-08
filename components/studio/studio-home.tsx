import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE_FACTS } from "@/content/site-facts";
import { STUDIO } from "@/content/studio";
import { HOME_CONTENT } from "@/content/home";
import { getPublishedWorkEntries } from "@/content/work";
import { MarketGlobe } from "./market-globe";
import { ProjectCover } from "./project-cover";

export function StudioHome() {
  const projects = getPublishedWorkEntries();
  const featured = ["camz-cleaning-booking", "zelvomart-ecommerce-platform", "custom-crm-agency-operations"]
    .flatMap((slug) => projects.filter((project) => project.slug === slug));
  const proof = SITE_FACTS.stats;
  return (
    <>
      <section className="studio-hero">
        <div className="studio-hero-image">
          <Image src="/images/studio/robot.webp" alt="" fill sizes="(max-width: 760px) 100vw, 75vw" preload />
        </div>
        <div className="studio-wrap studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="studio-label"><span /> Independent digital studio</p>
            <h1>{STUDIO.headline.map((line) => <span className="studio-line-mask" key={line}><span data-studio-hero-line>{line}</span></span>)}</h1>
            <p className="studio-hero-lead">{STUDIO.lead}</p>
            <div className="studio-actions" data-hero-ctas="true">
              <Link href="/book-a-call/" className="studio-button">Book a strategy call <ArrowUpRight size={17} /></Link>
              <Link href="/our-work/" className="studio-button studio-button-outline">Explore our work <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className="studio-hero-index"><a href="#selected-work"><ArrowDown size={15} /> Scroll to explore</a><span>WEB / SYSTEMS / SEARCH</span></div>
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
          <div className="studio-section-head">
            <div><p className="studio-label"><span /> 01 / Portfolio</p><h2>Selected work</h2></div>
            <Link className="studio-link" href="/our-work/">View all projects <ArrowUpRight size={18} /></Link>
          </div>
          <div className="studio-bento" data-studio-gallery>
            {featured.map((study, index) => (
              <Link key={study.slug} href={`/our-work/${study.slug}/`} className={`studio-project studio-project-${index}`}>
                <ProjectCover study={study} />
                <div className="studio-project-copy"><p>{study.descriptor}</p><h3>{study.title}</h3><span className="studio-project-arrow"><ArrowUpRight size={20} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section studio-dark">
        <div className="studio-wrap studio-service-grid">
          <div><p className="studio-label"><span /> 02 / Capabilities</p><h2>What we build</h2><p className="studio-section-lead">Start with one project or bring web, search and automation together under one team.</p><Link className="studio-link" href="/services/">All services <ArrowUpRight size={17} /></Link></div>
          <div>{STUDIO.services.map((service) => <Link className="studio-service" key={service.number} href={service.href}>
            <span>{service.number}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div><ArrowUpRight size={20} />
          </Link>)}</div>
        </div>
        <div className="studio-platform-window"><div className="studio-platforms" data-studio-marquee>{STUDIO.platforms.map((name) => <span key={name}>{name}</span>)}</div></div>
      </section>
      <section className="studio-section studio-light">
        <div className="studio-wrap">
          <div className="studio-section-head"><div><p className="studio-label"><span /> 03 / Delivery</p><h2>From scope to handover</h2></div><Link className="studio-link" href="/offers/">Explore packages <ArrowUpRight size={18} /></Link></div>
          <ol className="studio-process">{STUDIO.process.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
          <div className="studio-audiences">{STUDIO.audiences.map((item) => <article key={item.label}><p className="studio-label">{item.label}</p><h3>{item.title}</h3><p>{item.detail}</p><Link href={item.href} className="studio-link">{item.action} <ArrowUpRight size={17} /></Link></article>)}</div>
        </div>
      </section>
      <section className="studio-section studio-dark studio-market-section">
        <div className="studio-wrap studio-market-grid">
          <div><p className="studio-label"><span /> 04 / Markets</p><h2>Work across<br />time zones</h2><p className="studio-section-lead">Our remote team is based in Pakistan and works with businesses and agencies across these five markets.</p>
            <ul className="studio-market-list">{SITE_FACTS.markets.map((market) => <li key={market.slug}>
              {market.slug === "new-zealand" ? <span><b>{market.shortCode}</b> {market.name}</span> : <Link href={`/locations/${market.slug}/`}><b>{market.shortCode}</b> {market.name}<ArrowUpRight size={15} /></Link>}
            </li>)}</ul>
          </div>
          <MarketGlobe />
        </div>
      </section>
      <section className="studio-section studio-light">
        <div className="studio-wrap studio-service-grid"><h2>Before we start</h2><div className="studio-faq">{HOME_CONTENT.faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div>
      </section>
      <section className="studio-section studio-contact">
        <div className="studio-wrap studio-section-head"><div><p className="studio-label"><span /> 05 / Contact</p><h2>Let’s talk about your project.</h2><p>Pick a date and time for a free 30-minute strategy call.</p></div><Link href="/book-a-call/" className="studio-button">Book a strategy call <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
