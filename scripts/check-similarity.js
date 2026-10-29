const http = require("http");

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
  const commonItems = [];
  for (const s of setA) {
    if (setB.has(s)) {
      common++;
      commonItems.push(s);
    }
  }
  const minLen = Math.min(setA.size, setB.size);
  return {
    sim: minLen === 0 ? 0 : (common / minLen) * 100,
    commonItems,
    totalA: setA.size,
    totalB: setB.size,
  };
}

(async () => {
  const ca = await get("/locations/canada/");
  const us = await get("/locations/united-states/");
  const uae = await get("/locations/uae/");
  const pk = await get("/locations/pakistan/");

  const locs = {
    canada: extractProseSentences(ca),
    us: extractProseSentences(us),
    uae: extractProseSentences(uae),
    pakistan: extractProseSentences(pk),
  };

  const keys = Object.keys(locs);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const a = keys[i];
      const b = keys[j];
      const res = computeSimilarity(locs[a], locs[b]);
      console.log(
        `${a} vs ${b}: ${res.sim.toFixed(1)}% (common: ${res.commonItems.length}/${Math.min(res.totalA, res.totalB)})`
      );
      if (res.commonItems.length > 0) {
        console.log("   Common sentences:", res.commonItems);
      }
    }
  }
})();
