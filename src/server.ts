import { serve } from "bun";
import { generatePrBadge } from "./badges/pr.ts";
import { getCache, setCache } from "./cache.ts";

console.log("✨🛡️ Insigno Badge Service activated! Ultra-light SVGs ready to shine 🌸🎴");

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/pr") {
      const add = parseInt(url.searchParams.get("add") || "0");
      const del = parseInt(url.searchParams.get("del") || "0");
      const commits = parseInt(url.searchParams.get("commits") || "0");
      const key = `${add}-${del}-${commits}-pr`;

      let svgGz = getCache(key);
      if (!svgGz) {
        console.log(`🖌️ [Insigno] Generating new PR badge: +${add} −${del} • ${commits} commits`);
        svgGz = generatePrBadge(add, del, commits);
        setCache(key, svgGz);
      } else {
        console.log(`⚡ [Insigno] Serving cached PR badge: +${add} −${del} • ${commits} commits`);
      }

      return new Response(svgGz, {
        headers: {
          "Content-Type": "image/svg+xml",
          "Content-Encoding": "gzip",
          "Cache-Control": `public,max-age=3600`,
        },
      });
    }

    return new Response("❌ [Insigno] Badge route not found.", { status: 404 });
  },
});
