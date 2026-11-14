import Image from "next/image";
import Link from "next/link";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { getSitemapGroups, sitemapPath } from "@/lib/sitemap";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Sitemap | Webix Solutions",
  description: "Browse Webix Solutions pages, services, articles and project images.",
  path: "/sitemap/",
  noindex: true,
});

export default function SitemapPage() {
  const groups = getSitemapGroups();
  const count = groups.reduce((sum, group) => sum + group.entries.length, 0);

  return (
    <>
      <Section surface="graphite" spacing="hero">
        <Container>
          <h1 className="type-display text-white">Sitemap</h1>
          <p className="type-lead mt-5 text-[#c5c9d1]">{count} pages across our services, markets, work and articles.</p>
          <a className="studio-link mt-6" href="/sitemap.xml">Open the XML sitemap</a>
        </Container>
      </Section>
      <Section surface="porcelain">
        <Container>
          <nav className="sitemap-sections" aria-label="Sitemap sections">
            {groups.map((group) => <a key={group.slug} href={`#${group.slug}`}>{group.title} <span>{group.entries.length}</span></a>)}
          </nav>
          {groups.map((group) => (
            <section className="sitemap-group" id={group.slug} key={group.slug} aria-labelledby={`heading-${group.slug}`}>
              <div className="sitemap-group-heading">
                <h2 id={`heading-${group.slug}`} className="type-h3">{group.title}</h2>
                <a href={sitemapPath(group.slug)}>View XML</a>
              </div>
              <div className="sitemap-table-scroll" role="region" aria-label={`${group.title} sitemap`} tabIndex={0}>
                <table className="sitemap-table">
                  <thead><tr><th scope="col">Page</th><th scope="col">Last modified</th><th scope="col">Images</th><th scope="col">Preview</th></tr></thead>
                  <tbody>
                    {group.entries.map((entry) => (
                      <tr key={entry.path}>
                        <td><Link href={entry.path}>{entry.title}</Link><span className="sitemap-url">{SITE_URL}{entry.path}</span></td>
                        <td>{entry.lastModified ? <time dateTime={entry.lastModified}>{entry.lastModified.slice(0, 10)}</time> : "—"}</td>
                        <td>{entry.images.length}</td>
                        <td>
                          <div className="sitemap-thumbnails">
                            {entry.images.slice(0, 1).map((image) => (
                              <a key={image.path} href={image.path}>
                                <Image src={image.path} alt={image.alt} width={88} height={55} sizes="88px" unoptimized={image.path.endsWith(".svg")} />
                              </a>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </Container>
      </Section>
    </>
  );
}
