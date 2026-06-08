const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const outPath = path.join(process.cwd(), 'public', 'og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#090C10"/>
      <stop offset="0.58" stop-color="#10151C"/>
      <stop offset="1" stop-color="#1A222C"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="14%" r="58%">
      <stop offset="0" stop-color="#8CB8B2" stop-opacity="0.26"/>
      <stop offset="0.52" stop-color="#CDB273" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#CDB273" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g opacity="0.15">
    <path d="M0 120H1200M0 240H1200M0 360H1200M0 480H1200" stroke="#CDB273" stroke-width="1"/>
    <path d="M120 0V630M300 0V630M480 0V630M660 0V630M840 0V630M1020 0V630" stroke="#8CB8B2" stroke-width="1"/>
  </g>
  <circle cx="1000" cy="110" r="132" fill="#8CB8B2" opacity="0.12" filter="url(#soft)"/>
  <g transform="translate(78 70)">
    <rect x="0" y="0" width="54" height="54" rx="8" fill="#CDB273"/>
    <text x="27" y="37" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="700" fill="#11100C">S</text>
    <text x="72" y="35" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="2" fill="#F2F1EA">SEYKO STUDIOS</text>
  </g>
  <text x="78" y="198" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="4" fill="#CDB273">DEMAND INTELLIGENCE AGENCY</text>
  <text x="78" y="286" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="700" fill="#F2F1EA">Buyer intent,</text>
  <text x="78" y="360" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="700" fill="#F2F1EA">competitor angles,</text>
  <text x="78" y="434" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="700" fill="#CDB273">next moves.</text>
  <text x="82" y="514" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="400" fill="#ADB2B8">For three high-value service markets.</text>
  <g transform="translate(78 558)">
    <rect x="0" y="0" width="196" height="34" rx="7" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="18" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">HEALTHCARE</text>
    <rect x="216" y="0" width="244" height="34" rx="7" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="234" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">LOCAL SERVICES</text>
    <rect x="480" y="0" width="286" height="34" rx="7" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="498" y="23" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">B2B SERVICES</text>
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
