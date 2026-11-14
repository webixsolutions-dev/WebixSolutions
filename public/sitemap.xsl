<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="s image">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap | Webix Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f4f5f7; color: #172033; font: 16px/1.5 system-ui, sans-serif; }
          main { max-width: 1200px; margin: 48px auto; padding: 0 24px; }
          header { margin-bottom: 26px; }
          .brand { font-size: 14px; letter-spacing: .02em; font-weight: 700; color: #a81420; text-decoration: none; }
          h1 { margin: 10px 0 8px; font-size: clamp(30px, 4vw, 44px); line-height: 1.15; letter-spacing: -.025em; }
          p { margin: 8px 0; color: #566174; }
          a { color: #a81420; text-underline-offset: 3px; }
          a:focus-visible { outline: 2px solid #c8101a; outline-offset: 4px; }
          .links { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 16px; }
          .table-scroll { overflow-x: auto; border: 1px solid #d8dce4; border-radius: 14px; }
          table { border-collapse: collapse; width: 100%; min-width: 680px; text-align: left; font-size: 15px; }
          th { padding: 14px 16px; background: #a81420; color: #fff; font-weight: 600; white-space: nowrap; }
          td { padding: 14px 16px; border-top: 1px solid #e2e6ec; vertical-align: top; }
          tbody tr:nth-child(odd) { background: #fff; }
          tbody tr:nth-child(even) { background: #f8f9fb; }
          td:first-child { overflow-wrap: anywhere; min-width: 260px; }
          td a { text-decoration: none; }
          td a:hover { text-decoration: underline; }
          .thumbs { display: flex; }
          .thumbs img { display: block; width: 88px; height: 55px; object-fit: cover; border: 1px solid #d8dce4; border-radius: 6px; }
          footer { margin-top: 20px; font-size: 14px; }
          @media (max-width: 600px) { main { margin: 28px auto; padding: 0 16px; } table { min-width: 0; font-size: 13px; } th, td { padding: 10px 8px; } th { white-space: normal; } td:first-child { min-width: 0; } .thumbs img { width: 64px; height: 40px; } }
        </style>
      </head>
      <body>
        <main>
          <header>
            <a class="brand" href="/">WEBIX SOLUTIONS</a>
            <h1><xsl:choose><xsl:when test="s:sitemapindex">XML sitemap index</xsl:when><xsl:otherwise>XML sitemap</xsl:otherwise></xsl:choose></h1>
            <p><xsl:choose>
              <xsl:when test="s:sitemapindex"><xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemaps organise our pages, services, markets, projects and articles.</xsl:when>
              <xsl:otherwise><xsl:value-of select="count(s:urlset/s:url)"/> pages with <xsl:value-of select="count(s:urlset/s:url/image:image)"/> image references.</xsl:otherwise>
            </xsl:choose></p>
            <nav class="links" aria-label="Sitemap views">
              <a href="/sitemap/">Browse pages and image previews</a>
              <xsl:if test="s:urlset"><a href="/sitemap.xml">All sitemaps</a></xsl:if>
            </nav>
          </header>
          <div class="table-scroll" role="region" aria-label="Sitemap URLs" tabindex="0">
            <table>
              <xsl:choose>
                <xsl:when test="s:sitemapindex">
                  <thead><tr><th scope="col">Sitemap</th><th scope="col">Last modified</th></tr></thead>
                  <tbody>
                    <xsl:for-each select="s:sitemapindex/s:sitemap">
                      <tr><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                        <td><xsl:call-template name="date"/></td></tr>
                    </xsl:for-each>
                  </tbody>
                </xsl:when>
                <xsl:otherwise>
                  <thead><tr><th scope="col">URL</th><th scope="col">Last modified</th><th scope="col">Images</th><th scope="col">Preview</th></tr></thead>
                  <tbody>
                    <xsl:for-each select="s:urlset/s:url">
                      <tr>
                        <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                        <td><xsl:call-template name="date"/></td>
                        <td><xsl:value-of select="count(image:image)"/></td>
                        <td><div class="thumbs">
                          <xsl:for-each select="image:image[1]">
                            <a href="{image:loc}" aria-label="Open full-size image">
                              <img src="{image:loc}" alt="" width="88" height="55" loading="lazy"/>
                            </a>
                          </xsl:for-each>
                        </div></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </xsl:otherwise>
              </xsl:choose>
            </table>
          </div>
          <footer><p>This XML sitemap helps search engines discover the public pages and images on Webix Solutions.</p><p><a href="/sitemap/">The regular sitemap page</a> is also available in browsers without XML styling.</p></footer>
        </main>
      </body>
    </html>
  </xsl:template>
  <xsl:template name="date">
    <xsl:choose><xsl:when test="s:lastmod"><xsl:value-of select="translate(substring(s:lastmod,1,16),'T',' ')"/></xsl:when><xsl:otherwise>—</xsl:otherwise></xsl:choose>
  </xsl:template>
</xsl:stylesheet>
