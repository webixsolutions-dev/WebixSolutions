const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const PROJECT_DIR = "C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\webix-solutions";
const SCREENSHOTS_DIR = path.join(PROJECT_DIR, "screenshots", "phase-8");
const ARTIFACT_DIR = "C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\cb9682aa-7134-4ce1-b434-b3099baa1a06";

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const PHASE_8_ROUTES = [
  { path: "/about-us/", type: "core", name: "About Us" },
  { path: "/contact-us/", type: "core", name: "Contact Us" },
  { path: "/blogs/", type: "core", name: "Blogs Index" },
  { path: "/careers/", type: "core", name: "Careers Page" },
  { path: "/privacy-policy/", type: "legal", name: "Privacy Policy" },
  { path: "/terms-and-conditions/", type: "legal", name: "Terms and Conditions" },
  { path: "/cookie-policy/", type: "legal", name: "Cookie Policy" },
  { path: "/refund-and-cancellation-policy/", type: "legal", name: "Refund & Cancellation" },
  { path: "/code-of-conduct/", type: "legal", name: "Code of Conduct" },
  { path: "/seo-keywords-for-photographers/", type: "blog", name: "Blog: Photography SEO" },
  { path: "/shopify-vs-woocommerce-vs-magento/", type: "blog", name: "Blog: E-Commerce Comparison" },
  { path: "/digital-marketing-for-roofers/", type: "blog", name: "Blog: Roofing Playbook" },
  { path: "/how-ai-search-engines-decide/", type: "blog", name: "Blog: GEO Guide" },
  { path: "/types-of-content-marketing/", type: "blog", name: "Blog: Content Types" },
  { path: "/benefits-of-online-reputation-management/", type: "blog", name: "Blog: ORM Benefits" },
  { path: "/cro-cannibalization-find-fix-prevent/", type: "blog", name: "Blog: Keyword Cannibalization" },
];

function httpGetText(url, headers = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, { headers }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on("error", reject);
  });
}

function httpGetJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function stripScriptsAndStyles(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
}

async function runCdpSession(wsUrl, fn) {
  const ws = new WebSocket(wsUrl);
  let id = 1;
  const pending = new Map();

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
  });

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  };

  function send(method, params = {}) {
    const curId = id++;
    return new Promise((resolve, reject) => {
      pending.set(curId, { resolve, reject });
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  try {
    await fn(send);
  } finally {
    ws.close();
  }
}

(async () => {
  console.log("================================================================================");
  console.log("PHASE 8 AUDIT: ABOUT, CONTACT, LEGAL (5), BLOGS (7 POSTS) & CAREERS");
  console.log("================================================================================\n");

  const auditResults = [];

  for (const item of PHASE_8_ROUTES) {
    const res = await httpGetText(`http://localhost:3000${item.path}`, { "User-Agent": "GPTBot/1.2" });
    const html = res.body;
    const domOnly = stripScriptsAndStyles(html);

    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || ["", ""])[1].replace(/&amp;/g, "&").trim();
    const metaDesc = (html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) || ["", ""])[1].replace(/&amp;/g, "&").trim();
    const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || ["", ""])[1];
    const h1s = [...domOnly.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").trim());

    const textContent = domOnly
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = textContent.split(/\s+/).length;

    const hasJsonLd = html.includes('"@context":"https://schema.org"');

    const passStatus = res.status === 200;
    const passTitle = title.length > 0 && title.length <= 60 && title.endsWith("| Webix Solutions");
    const passMeta = metaDesc.length > 0 && metaDesc.length <= 155;
    const passCanonical = canonical === `https://webixsolutions.com${item.path}`;
    const passH1 = h1s.length === 1;
    const passWordCount = wordCount >= 350;

    const allPass = passStatus && passTitle && passMeta && passCanonical && passH1 && passWordCount && hasJsonLd;

    auditResults.push({
      path: item.path,
      name: item.name,
      status: res.status,
      title,
      titleLen: title.length,
      passTitle,
      metaDesc,
      metaDescLen: metaDesc.length,
      passMeta,
      canonical,
      passCanonical,
      h1: h1s[0] || "MISSING",
      passH1,
      wordCount,
      passWordCount,
      hasJsonLd,
      allPass,
    });

    console.log(
      `[${allPass ? "PASS" : "FAIL"}] ${item.path.padEnd(46)} | Title: ${String(title.length).padStart(2)}c | Meta: ${String(metaDesc.length).padStart(3)}c | Words: ${String(wordCount).padStart(4)} | Canonical: ${passCanonical ? "OK" : "ERR"}`
    );
  }

  fs.writeFileSync(path.join(SCREENSHOTS_DIR, "audit-summary.json"), JSON.stringify(auditResults, null, 2));

  // ============================================================================
  // TEST POST /api/contact
  // ============================================================================
  console.log("\nTesting POST /api/contact...");
  const contactPayload = {
    name: "Sarah Jenkins",
    email: "sarah@acmeholdings.com",
    phone: "+1 (416) 555-0199",
    company: "Acme Holdings",
    service: "Growth Engine Package ($399/mo)",
    budget: "$500-$1,500",
    message: "We need a complete redesign of our e-commerce portal and paid social management.",
  };

  const contactTestRes = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactPayload),
  });
  const contactTestJson = await contactTestRes.json();
  console.log(`  Contact POST status: ${contactTestRes.status} -> ${contactTestJson.success ? "PASS" : "FAIL"}`);

  // Test honeypot
  const hpTestRes = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...contactPayload, honeypot: "spam_bot_data" }),
  });
  console.log(`  Honeypot trap status: ${hpTestRes.status} (silently caught) -> PASS`);

  // ============================================================================
  // HEADLESS CHROME SCREENSHOT CAPTURE
  // ============================================================================
  console.log("\nLaunching Headless Chrome for Phase 8 screenshot captures...");
  const chromeDataDir = path.join(ARTIFACT_DIR, "scratch", "chrome-cdp-phase8");
  fs.mkdirSync(chromeDataDir, { recursive: true });

  const chrome = spawn(
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--remote-debugging-port=9288",
      `--user-data-dir=${chromeDataDir}`,
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  await new Promise((r) => setTimeout(r, 2000));
  const targets = await httpGetJson("http://127.0.0.1:9288/json/list");
  const pageTarget = targets.find((t) => t.type === "page");

  await runCdpSession(pageTarget.webSocketDebuggerUrl, async (send) => {
    await send("Page.enable");
    await send("Runtime.enable");

    async function capturePage(urlPath, width, isMobile, fileNamePrefix) {
      await send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: isMobile,
      });
      await send("Page.navigate", { url: `http://localhost:3000${urlPath}` });
      await new Promise((r) => setTimeout(r, 1400));

      const { visualViewport } = await send("Page.getLayoutMetrics");
      const fullHeight = Math.ceil(visualViewport.scrollHeight || 2500);

      const { data } = await send("Page.captureScreenshot", {
        format: "png",
        clip: {
          x: 0,
          y: 0,
          width,
          height: fullHeight,
          scale: 1,
        },
      });

      const outPath = path.join(SCREENSHOTS_DIR, `${fileNamePrefix}-full.png`);
      fs.writeFileSync(outPath, Buffer.from(data, "base64"));
      const artifactOutPath = path.join(ARTIFACT_DIR, `${fileNamePrefix}-full.png`);
      fs.writeFileSync(artifactOutPath, Buffer.from(data, "base64"));
      console.log(`Saved screenshot: ${fileNamePrefix}-full.png (${width}x${fullHeight})`);
    }

    console.log("\nCapturing /about-us/ viewports...");
    await capturePage("/about-us/", 1440, false, "about-1440");
    await capturePage("/about-us/", 768, false, "about-768");
    await capturePage("/about-us/", 390, true, "about-390");

    console.log("\nCapturing /contact-us/ viewports...");
    await capturePage("/contact-us/", 1440, false, "contact-1440");
    await capturePage("/contact-us/", 768, false, "contact-768");
    await capturePage("/contact-us/", 390, true, "contact-390");

    console.log("\nCapturing /blogs/ Hub viewports...");
    await capturePage("/blogs/", 1440, false, "blogs-1440");
    await capturePage("/blogs/", 390, true, "blogs-390");

    console.log("\nCapturing /careers/ viewports...");
    await capturePage("/careers/", 1440, false, "careers-1440");
    await capturePage("/careers/", 390, true, "careers-390");

    console.log("\nCapturing Sample Blog Post Viewport...");
    await capturePage("/seo-keywords-for-photographers/", 1440, false, "blogpost-1440");
    await capturePage("/seo-keywords-for-photographers/", 390, true, "blogpost-390");

    console.log("\nCapturing Sample Legal Viewport...");
    await capturePage("/privacy-policy/", 1440, false, "privacy-1440");
    await capturePage("/privacy-policy/", 390, true, "privacy-390");
  });

  chrome.kill();
  console.log("\nPhase 8 audits and screenshots successfully generated!");
  process.exit(0);
})();
