// Pings IndexNow (Bing, Yandex) with every URL in the published sitemaps. Run after each deploy: node scripts/indexnow.mjs
const SITE = "https://icfc.com.sg";
const KEY = "a9d8b035fc49c054c37fcc6414783065"; // must match public/a9d8b035fc49c054c37fcc6414783065.txt
const index = await (await fetch(SITE + "/sitemap.xml")).text();
const urlList = [];
for (const [, loc] of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const xml = await (await fetch(loc)).text();
  for (const [, u] of xml.matchAll(/<url><loc>([^<]+)<\/loc>/g)) urlList.push(u.replace(/&amp;/g, "&"));
}
for (const host of ["https://api.indexnow.org/indexnow", "https://yandex.com/indexnow"]) {
  const res = await fetch(host, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host: "icfc.com.sg", key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
  });
  console.log(host, res.status, urlList.length, "urls");
}
