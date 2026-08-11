/**
 * Generates branded title cards for projects that have no publishable
 * screenshots (client work under NDA, delisted titles, pre-release SaaS).
 *
 * These are deliberately schematic -- system diagrams in the site's own visual
 * language, never mock gameplay. Each card states a verifiable fact from the
 * case study rather than implying a capture that does not exist.
 *
 * Run: npm run generate:cards
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const W = 1600;
const H = 900;
const OUT_DIR = path.resolve(process.cwd(), 'public', 'images', 'projects');

function makeRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function stars(seed) {
  const r = makeRandom(seed);
  let out = '';
  for (let i = 0; i < 130; i += 1) {
    out += `<circle cx="${(r() * W).toFixed(1)}" cy="${(r() * H).toFixed(1)}" r="${(0.7 + r() * 1.8).toFixed(2)}" fill="#dbeafe" opacity="${(0.2 + r() * 0.55).toFixed(2)}"/>`;
  }
  return out;
}

/* Free-roam arena: co-located players sharing one tracked space. */
function arenaMotif(cx, cy) {
  const players = [
    [-150, -60], [40, -110], [130, 30], [-60, 90], [-190, 70],
  ];
  let grid = '';
  for (let i = -4; i <= 4; i += 1) {
    grid += `<line x1="${cx + i * 55}" y1="${cy - 165}" x2="${cx + i * 55}" y2="${cy + 165}" stroke="#67e8f9" stroke-width="1" opacity="0.16"/>`;
    grid += `<line x1="${cx - 240}" y1="${cy + i * 41}" x2="${cx + 240}" y2="${cy + i * 41}" stroke="#67e8f9" stroke-width="1" opacity="0.16"/>`;
  }
  let links = '';
  for (let i = 0; i < players.length; i += 1) {
    for (let j = i + 1; j < players.length; j += 1) {
      links += `<line x1="${cx + players[i][0]}" y1="${cy + players[i][1]}" x2="${cx + players[j][0]}" y2="${cy + players[j][1]}" stroke="#a78bfa" stroke-width="1.3" opacity="0.3"/>`;
    }
  }
  const nodes = players
    .map(
      ([x, y]) =>
        `<circle cx="${cx + x}" cy="${cy + y}" r="13" fill="#05060d" stroke="#7dd3fc" stroke-width="2.4"/>
         <circle cx="${cx + x}" cy="${cy + y}" r="5" fill="#f0abfc"/>`,
    )
    .join('');
  return `<rect x="${cx - 245}" y="${cy - 170}" width="490" height="340" rx="26" fill="none" stroke="#67e8f9" stroke-width="2" opacity="0.42"/>${grid}${links}${nodes}`;
}

/* xrapp.dev: instructor-led cohort around one authoritative session. */
function hubMotif(cx, cy) {
  const seats = 6;
  let spokes = '';
  let nodes = '';
  for (let i = 0; i < seats; i += 1) {
    const a = (i / seats) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * 175;
    const y = cy + Math.sin(a) * 140;
    spokes += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#67e8f9" stroke-width="1.6" opacity="0.4"/>`;
    nodes += `<rect x="${(x - 17).toFixed(1)}" y="${(y - 12).toFixed(1)}" width="34" height="24" rx="9" fill="#05060d" stroke="#7dd3fc" stroke-width="2.2"/>
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6" fill="#f0abfc"/>`;
  }
  let bars = '';
  [46, 78, 60, 96].forEach((h, i) => {
    bars += `<rect x="${cx + 200 + i * 22}" y="${cy + 120 - h}" width="12" height="${h}" rx="3" fill="#a78bfa" opacity="${0.35 + i * 0.14}"/>`;
  });
  return `<circle cx="${cx}" cy="${cy}" r="182" fill="none" stroke="#a78bfa" stroke-width="1.6" opacity="0.28"/>
          ${spokes}${nodes}
          <circle cx="${cx}" cy="${cy}" r="34" fill="#05060d" stroke="#a78bfa" stroke-width="2.6"/>
          <circle cx="${cx}" cy="${cy}" r="12" fill="#67e8f9" opacity="0.9"/>${bars}`;
}

/* Big Cash Poker VR: VR clients reconciled against an authoritative backend. */
function tableMotif(cx, cy) {
  let seats = '';
  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2 + 0.4;
    const x = cx + Math.cos(a) * 190;
    const y = cy + Math.sin(a) * 96;
    seats += `<rect x="${(x - 16).toFixed(1)}" y="${(y - 11).toFixed(1)}" width="32" height="22" rx="8" fill="#05060d" stroke="#7dd3fc" stroke-width="2.2"/>
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" fill="#f0abfc"/>
              <line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${cx}" y2="${cy}" stroke="#67e8f9" stroke-width="1.2" opacity="0.3"/>`;
  }
  let cards = '';
  [-46, -14, 18].forEach((dx, i) => {
    cards += `<rect x="${cx + dx}" y="${cy - 26}" width="26" height="38" rx="5" fill="#0b1120" stroke="#a78bfa" stroke-width="1.8" opacity="${0.6 + i * 0.15}" transform="rotate(${(i - 1) * 8} ${cx + dx + 13} ${cy - 7})"/>`;
  });
  return `<ellipse cx="${cx}" cy="${cy}" rx="215" ry="118" fill="none" stroke="#67e8f9" stroke-width="2" opacity="0.4"/>
          <ellipse cx="${cx}" cy="${cy}" rx="178" ry="90" fill="#0b1120" opacity="0.45"/>${seats}${cards}`;
}

const CARDS = [
  {
    slug: 'free-roam-vr-arena',
    eyebrow: 'LOCATION-BASED ENTERTAINMENT',
    title: 'Free-Roam Multiplayer',
    title2: 'VR Arena',
    facts: ['3 commercial venues', '90fps standalone', 'Multi-headset co-location'],
    motif: arenaMotif,
    seed: 4101,
  },
  {
    slug: 'xrapp-dev',
    eyebrow: 'ENTERPRISE VR TRAINING SAAS',
    title: 'xrapp.dev',
    title2: '',
    facts: ['Instructor-led cohorts', 'Digital twin simulation', 'LMS / HRMS integration'],
    motif: hubMotif,
    seed: 4102,
  },
  {
    slug: 'big-cash-poker-vr',
    eyebrow: 'MULTIPLAYER VR ON A 50M+ USER IP',
    title: 'Big Cash Poker VR',
    title2: '',
    facts: ['Sub-100ms latency', 'Zero critical defects', 'Shipped in 3 months'],
    motif: tableMotif,
    seed: 4103,
  },
];

function svgFor(card) {
  const factRows = card.facts
    .map(
      (f, i) =>
        `<rect x="96" y="${572 + i * 62}" width="5" height="34" rx="2.5" fill="#7C3AED"/>
         <text x="120" y="${598 + i * 62}" fill="#94A3B8" font-size="27">${f}</text>`,
    )
    .join('');

  const title2 = card.title2
    ? `<text x="96" y="${420}" fill="#EFF1FF" font-size="72" font-weight="700">${card.title2}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="a" cx="14%" cy="10%" r="66%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.34"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="86%" cy="72%" r="62%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#05060d"/>
  <rect width="${W}" height="${H}" fill="url(#a)"/>
  <rect width="${W}" height="${H}" fill="url(#b)"/>
  ${stars(card.seed)}
  ${card.motif(1160, 450)}
  <g font-family="Segoe UI, Arial, Helvetica, sans-serif">
    <text x="96" y="248" fill="#a78bfa" font-size="24" font-weight="600" letter-spacing="6">${card.eyebrow}</text>
    <text x="96" y="${card.title2 ? 344 : 366}" fill="#EFF1FF" font-size="72" font-weight="700">${card.title}</text>
    ${title2}
    ${factRows}
    <text x="96" y="812" fill="#64748B" font-size="21" letter-spacing="2">SYSTEM DIAGRAM — NOT A GAMEPLAY CAPTURE</text>
  </g>
</svg>`;
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const card of CARDS) {
    const buffer = Buffer.from(svgFor(card));
    for (const width of [800, 1600]) {
      const base = path.join(OUT_DIR, `${card.slug}-card-${width}`);
      await sharp(buffer).resize({ width }).webp({ quality: 88 }).toFile(`${base}.webp`);
      await sharp(buffer).resize({ width }).avif({ quality: 60 }).toFile(`${base}.avif`);
    }
    console.log(`  ok ${card.slug}-card`);
  }
  console.log(`\n${CARDS.length} project cards written to ${OUT_DIR}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
