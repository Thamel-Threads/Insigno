import { formatNumber } from "../utils.ts";
import { gzip } from "pako";

// 🛡️ INSIGNO PR BADGE GENERATOR (Ultra mode, always gzip)
export function generatePrBadge(add: number, del: number, commits: number): Uint8Array {
  const addText = "+" + formatNumber(add);
  const delText = "−" + formatNumber(del);
  const commitText = commits + " commits";

  const pad = 4;
  const h = 20;
  const fs = 11;
  const gap = 2; // Small gap between sections

  const addW = addText.length * 6 + pad * 2;
  const delW = delText.length * 6 + pad * 2;
  const commitW = commitText.length * 6 + pad * 2;
  const svgW = addW + delW + commitW + gap * 2; // Add gaps

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${h}"><rect x="0" y="0" width="${addW}" height="${h}" fill="#4caf50"/><rect x="${addW + gap}" y="0" width="${delW}" height="${h}" fill="#f44336"/><rect x="${addW + delW + gap * 2}" y="0" width="${commitW}" height="${h}" fill="#2196f3"/><text x="${addW/2}" y="14" fill="#fff" font-size="${fs}" font-family="sans" text-anchor="middle">${addText}</text><text x="${addW + gap + delW/2}" y="14" fill="#fff" font-size="${fs}" font-family="sans" text-anchor="middle">${delText}</text><text x="${addW + delW + gap * 2 + commitW/2}" y="14" fill="#fff" font-size="${fs}" font-family="sans" text-anchor="middle">${commitText}</text></svg>`;

  return gzip(svg);
}
