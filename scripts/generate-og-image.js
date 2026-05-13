const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const outPath = path.join(process.cwd(), 'public', 'og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#041008"/>
      <stop offset="0.58" stop-color="#07170D"/>
      <stop offset="1" stop-color="#102817"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="14%" r="58%">
      <stop offset="0" stop-color="#8FFFAB" stop-opacity="0.26"/>
      <stop offset="0.52" stop-color="#8FFFAB" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#8FFFAB" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g opacity="0.15">
    <path d="M0 120H1200M0 240H1200M0 360H1200M0 480H1200" stroke="#8FFFAB" stroke-width="1"/>
    <path d="M120 0V630M300 0V630M480 0V630M660 0V630M840 0V630M1020 0V630" stroke="#8FFFAB" stroke-width="1"/>
  </g>
  <circle cx="1000" cy="110" r="132" fill="#8FFFAB" opacity="0.10" filter="url(#soft)"/>
  <g transform="translate(78 70)">
    <rect x="0" y="0" width="54" height="54" rx="8" fill="#8FFFAB"/>
    <text x="27" y="37" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="700" fill="#06160C">S</text>
    <text x="72" y="35" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="2" fill="#EEF8F0">SEYKO STUDIOS</text>
  </g>
  <text x="78" y="198" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="4" fill="#8FFFAB">DEMAND RADAR</text>
  <text x="78" y="286" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700" fill="#EEF8F0">Demand intelligence</text>
  <text x="78" y="364" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700" fill="#EEF8F0">for plastic surgery</text>
  <text x="78" y="442" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700" fill="#8FFFAB">practices.</text>
  <text x="82" y="514" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="400" fill="#B7C8BC">See where consult demand is being won, stalled, or lost.</text>
  <g transform="translate(78 558)">
    <rect x="0" y="0" width="174" height="34" rx="7" fill="#8FFFAB" fill-opacity="0.12" stroke="#8FFFAB" stroke-opacity="0.34"/>
    <text x="18" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#8FFFAB">3 ACTIVE</text>
    <rect x="194" y="0" width="204" height="34" rx="7" fill="#8FFFAB" fill-opacity="0.12" stroke="#8FFFAB" stroke-opacity="0.34"/>
    <text x="212" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#8FFFAB">2 SLOTS OPEN</text>
    <rect x="418" y="0" width="286" height="34" rx="7" fill="#8FFFAB" fill-opacity="0.12" stroke="#8FFFAB" stroke-opacity="0.34"/>
    <text x="436" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#8FFFAB">MADE IN LOS ANGELES</text>
  </g>
</svg>`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => {
    console.log(`Wrote ${outPath}`);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
