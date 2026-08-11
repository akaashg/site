/**
 * Generates the 1200x630 social share card at public/images/og-default.png.
 *
 * LinkedIn, X, Slack, and WhatsApp do not render SVG og:image files — they show
 * no preview at all. This produces the raster card those crawlers need.
 *
 * Run: npm run generate:og
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT = path.resolve(process.cwd(), 'public', 'images', 'og-default.png');

/* Deterministic RNG so the card is byte-stable across rebuilds. */
function makeRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function starField() {
  const random = makeRandom(20260811);
  const stars = [];
  for (let i = 0; i < 160; i += 1) {
    const x = (random() * WIDTH).toFixed(1);
    const y = (random() * HEIGHT).toFixed(1);
    const r = (0.6 + random() * 1.7).toFixed(2);
    const o = (0.25 + random() * 0.6).toFixed(2);
    stars.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="#dbeafe" opacity="${o}"/>`);
  }
  return stars.join('');
}

/* The ringed planet from the site hero, flattened to static SVG. */
function planet(cx, cy, radius) {
  const lines = [];
  for (let i = 1; i < 6; i += 1) {
    const ry = (radius * Math.cos((i / 6) * Math.PI)).toFixed(1);
    lines.push(
      `<ellipse cx="${cx}" cy="${cy}" rx="${radius}" ry="${Math.abs(ry)}" fill="none" stroke="#7dd3fc" stroke-width="1.1" opacity="0.45"/>`,
    );
  }
  for (let i = 0; i < 6; i += 1) {
    const rx = (radius * Math.cos((i / 6) * Math.PI)).toFixed(1);
    lines.push(
      `<ellipse cx="${cx}" cy="${cy}" rx="${Math.abs(rx)}" ry="${radius}" fill="none" stroke="#7dd3fc" stroke-width="1.1" opacity="0.45"/>`,
    );
  }
  return `
    <circle cx="${cx}" cy="${cy}" r="${radius * 1.16}" fill="#7c3aed" opacity="0.16"/>
    <circle cx="${cx}" cy="${cy}" r="${radius}" fill="#0b1120"/>
    ${lines.join('')}
    <g transform="rotate(-16 ${cx} ${cy})">
      <ellipse cx="${cx}" cy="${cy}" rx="${radius * 1.72}" ry="${radius * 0.42}" fill="none" stroke="#67e8f9" stroke-width="7" opacity="0.42"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${radius * 1.95}" ry="${radius * 0.48}" fill="none" stroke="#a78bfa" stroke-width="3.5" opacity="0.36"/>
    </g>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <radialGradient id="neb1" cx="16%" cy="8%" r="62%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="neb2" cx="88%" cy="76%" r="60%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="neb3" cx="60%" cy="104%" r="55%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#05060d"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#neb1)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#neb2)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#neb3)"/>
  ${starField()}
  ${planet(940, 315, 132)}

  <g font-family="Segoe UI, Arial, Helvetica, sans-serif">
    <text x="80" y="150" fill="#a78bfa" font-size="25" font-weight="600" letter-spacing="7">LEAD XR ENGINEER</text>
    <text x="80" y="252" fill="#EFF1FF" font-size="76" font-weight="700">Akaash Garg</text>
    <text x="80" y="326" fill="#EFF1FF" font-size="35" font-weight="600">Enterprise XR, multiplayer</text>
    <text x="80" y="374" fill="#EFF1FF" font-size="35" font-weight="600">systems, and 90fps standalone.</text>
    <text x="80" y="452" fill="#94A3B8" font-size="25">Unity · OpenXR · Photon Fusion · Meta Quest</text>
    <rect x="78" y="502" width="6" height="46" rx="3" fill="#7C3AED"/>
    <text x="104" y="536" fill="#bae6fd" font-size="26" font-weight="600" letter-spacing="2">akaashgarg.com</text>
  </g>
</svg>`;

async function run() {
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(OUT);
  const { size } = await fs.stat(OUT);
  console.log(`Wrote ${OUT} (${WIDTH}x${HEIGHT}, ${(size / 1024).toFixed(1)} KB)`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
