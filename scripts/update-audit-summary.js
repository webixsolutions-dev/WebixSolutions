const fs = require("fs");
const path = require("path");
const http = require("http");

const SCREENSHOTS_DIR = "C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\webix-solutions\\screenshots\\phase-5";

function get(path) {
  return new Promise((resolve) => {
    http.get("http://localhost:3000" + path, (r) => {
      let d = "";
      r.on("data", (c) => (d += c));
      r.on("end", () => resolve(d));
    });
  });
}

function extractProseSentences(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let content = mainMatch ? mainMatch[1] : html;
  content = content.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const plainText = content.replace(/<[^>]+>/g, " ").replace(/&[a-z0-9#]+;/gi, " ");
  return plainText
    .replace(/[.!?\n\r]+/g, "|")
    .split("|")
    .map((s) => s.replace(/\s+/g, " ").trim().toLowerCase())
    .filter((s) => s.length > 25 && s.split(" ").length >= 5);
}

function computeSimilarity(sentencesA, sentencesB) {
  const setA = new Set(sentencesA);
  const setB = new Set(sentencesB);
  let common = 0;
  for (const s of setA) {
    if (setB.has(s)) common++;
  }
  const minLen = Math.min(setA.size, setB.size);
  return minLen === 0 ? 0 : (common / minLen) * 100;
}

(async () => {
  const auditFile = path.join(SCREENSHOTS_DIR, "audit-summary.json");
  const rawData = JSON.parse(fs.readFileSync(auditFile, "utf8"));

  const ca = await get("/locations/canada/");
  const us = await get("/locations/united-states/");
  const uae = await get("/locations/uae/");
  const pk = await get("/locations/pakistan/");

  const locs = {
    "/locations/canada/": extractProseSentences(ca),
    "/locations/united-states/": extractProseSentences(us),
    "/locations/uae/": extractProseSentences(uae),
    "/locations/pakistan/": extractProseSentences(pk),
  };

  const keys = Object.keys(locs);
  const matrix = [];
  let allPass = true;

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const a = keys[i];
      const b = keys[j];
      const sim = computeSimilarity(locs[a], locs[b]);
      const pass = sim < 30.0;
      if (!pass) allPass = false;
      matrix.push({
        pair: `${a} vs ${b}`,
        similarity: `${sim.toFixed(1)}%`,
        threshold: "< 30.0%",
        pass,
      });
    }
  }

  rawData.similarityReport = matrix;
  rawData.uniquenessPass = allPass;

  fs.writeFileSync(auditFile, JSON.stringify(rawData, null, 2));
  console.log("Updated audit-summary.json successfully!");
  console.log(JSON.stringify(matrix, null, 2));
})();
