const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const outPath = path.join(process.cwd(), 'public', 'og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#090C10"/>
      <stop offset="0.52" stop-color="#10151C"/>
      <stop offset="1" stop-color="#172229"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1F2D2E" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#10151C" stop-opacity="0.92"/>
    </linearGradient>
    <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#CDB273"/>
      <stop offset="1" stop-color="#E9D9A3"/>
    </linearGradient>
    <linearGradient id="tealLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8CB8B2"/>
      <stop offset="1" stop-color="#DAE7E3"/>
    </linearGradient>
    <radialGradient id="glow" cx="76%" cy="20%" r="62%">
      <stop offset="0" stop-color="#8CB8B2" stop-opacity="0.34"/>
      <stop offset="0.48" stop-color="#CDB273" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#CDB273" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.24"/>
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
  <g transform="translate(78 176)">
    <text x="0" y="22" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="4" fill="#CDB273">MARKET INTELLIGENCE FOR OPERATORS</text>
    <text x="0" y="106" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#F2F1EA">Find the buyers</text>
    <text x="0" y="180" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#F2F1EA">already in motion.</text>
    <text x="2" y="252" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="400" fill="#B8BDC3">Demand, competitor, review, and business data</text>
    <text x="2" y="289" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="400" fill="#B8BDC3">signals turned into next moves.</text>
  </g>
  <g transform="translate(78 542)">
    <rect x="0" y="0" width="188" height="38" rx="8" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="18" y="25" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">HEALTHCARE</text>
    <rect x="208" y="0" width="234" height="38" rx="8" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="226" y="25" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">LOCAL SERVICES</text>
    <rect x="462" y="0" width="224" height="38" rx="8" fill="#CDB273" fill-opacity="0.12" stroke="#CDB273" stroke-opacity="0.34"/>
    <text x="480" y="25" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#CDB273">B2B SERVICES</text>
  </g>
  <g transform="translate(704 102)" filter="url(#shadow)">
    <rect x="0" y="0" width="420" height="430" rx="24" fill="url(#panel)" stroke="#CDB273" stroke-opacity="0.2"/>
    <text x="30" y="54" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="3" fill="#CDB273">DEMAND RADAR</text>
    <text x="30" y="84" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="400" fill="#AEB7BA">Priority signals by market lane</text>
    <g transform="translate(38 120)">
      <circle cx="125" cy="125" r="104" fill="none" stroke="#8CB8B2" stroke-opacity="0.18"/>
      <circle cx="125" cy="125" r="76" fill="none" stroke="#8CB8B2" stroke-opacity="0.22"/>
      <circle cx="125" cy="125" r="46" fill="none" stroke="#8CB8B2" stroke-opacity="0.28"/>
      <path d="M125 18V232M18 125H232M49 49L201 201M201 49L49 201" stroke="#8CB8B2" stroke-opacity="0.18"/>
      <path d="M125 35L207 96L184 190L83 208L43 112Z" fill="#CDB273" fill-opacity="0.18" stroke="url(#goldLine)" stroke-width="3"/>
      <circle cx="125" cy="35" r="5" fill="#E9D9A3"/>
      <circle cx="207" cy="96" r="5" fill="#E9D9A3"/>
      <circle cx="184" cy="190" r="5" fill="#E9D9A3"/>
      <circle cx="83" cy="208" r="5" fill="#E9D9A3"/>
      <circle cx="43" cy="112" r="5" fill="#E9D9A3"/>
      <text x="105" y="129" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700" fill="#F2F1EA">73</text>
      <text x="88" y="153" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#CDB273">INTENT</text>
    </g>
    <g transform="translate(286 124)">
      <text x="0" y="14" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#8CB8B2">LANES</text>
      <rect x="0" y="34" width="88" height="9" rx="4.5" fill="#344246"/>
      <rect x="0" y="34" width="74" height="9" rx="4.5" fill="url(#tealLine)"/>
      <rect x="0" y="64" width="88" height="9" rx="4.5" fill="#344246"/>
      <rect x="0" y="64" width="58" height="9" rx="4.5" fill="url(#goldLine)"/>
      <rect x="0" y="94" width="88" height="9" rx="4.5" fill="#344246"/>
      <rect x="0" y="94" width="42" height="9" rx="4.5" fill="#AEB7BA"/>
      <text x="0" y="148" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#F2F1EA">42</text>
      <text x="0" y="174" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#CDB273">GAPS</text>
    </g>
    <g transform="translate(30 354)">
      <rect x="0" y="0" width="106" height="48" rx="10" fill="#091015" fill-opacity="0.54" stroke="#8CB8B2" stroke-opacity="0.16"/>
      <text x="16" y="21" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="1.8" fill="#8CB8B2">SEARCH</text>
      <text x="16" y="38" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#F2F1EA">monthly</text>
      <rect x="124" y="0" width="120" height="48" rx="10" fill="#091015" fill-opacity="0.54" stroke="#8CB8B2" stroke-opacity="0.16"/>
      <text x="140" y="21" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="1.8" fill="#8CB8B2">REVIEWS</text>
      <text x="140" y="38" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#F2F1EA">objections</text>
      <rect x="262" y="0" width="126" height="48" rx="10" fill="#091015" fill-opacity="0.54" stroke="#8CB8B2" stroke-opacity="0.16"/>
      <text x="278" y="21" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" letter-spacing="1.8" fill="#8CB8B2">OUTPUT</text>
      <text x="278" y="38" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#F2F1EA">next moves</text>
    </g>
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
