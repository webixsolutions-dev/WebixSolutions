const http = require('http');

const urls = [
  '/web-design-development-service/',
  '/seo-services/',
  '/social-media-management/'
];

async function checkUrl(path) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
        const metaDescMatch = data.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
          || data.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
        const h1Match = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE';
        const title = titleMatch ? titleMatch[1].trim() : 'NONE';
        const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : 'NONE';

        // Check JSON-LD
        const jsonLdMatches = [...data.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
        const schemas = [];
        for (const m of jsonLdMatches) {
          try {
            const parsed = JSON.parse(m[1]);
            if (parsed['@type']) schemas.push(parsed['@type']);
            if (parsed['@graph']) parsed['@graph'].forEach(g => schemas.push(g['@type']));
          } catch(e) {}
        }

        // Check if main copy is present in HTML
        const hasOutcomes = data.includes('Outcome 01');
        const hasDeliverables = data.includes('Deliverables checklist');
        const hasProcess = data.includes('How we work');

        resolve({
          path,
          status: res.statusCode,
          title,
          titleLen: title.length,
          titleValid: title.length <= 60,
          metaDesc,
          metaDescLen: metaDesc.length,
          metaDescValid: metaDesc.length <= 155,
          h1,
          schemas: [...new Set(schemas)],
          htmlSize: data.length,
          mainTextInHtml: hasOutcomes && hasDeliverables && hasProcess
        });
      });
    });
    req.on('error', reject);
    req.end();
  });
}

(async () => {
  const results = [];
  for (const url of urls) {
    const res = await checkUrl(url);
    results.push(res);
  }
  console.log(JSON.stringify(results, null, 2));
})();
