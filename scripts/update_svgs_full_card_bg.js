const fs = require('fs');
const path = require('path');

function getBase64(file) {
  const filePath = path.join('public', 'assets', file);
  const buffer = fs.readFileSync(filePath);
  let mime = 'image/jpeg';
  if (file.endsWith('.png')) mime = 'image/png';
  if (file.endsWith('.webp')) mime = 'image/webp';
  if (file.endsWith('.svg')) mime = 'image/svg+xml';
  return 'data:' + mime + ';base64,' + buffer.toString('base64');
}

// Logos
const sutLogo = getBase64('sut-logo.png');
const ibmLogo = getBase64('ibm-quantum-logo.png');
const qiskitLogo = getBase64('qiskit-logo.svg');
const cmuLogo = getBase64('cmu-logo.webp');
const psuLogo = getBase64('psu-logo.png');
const nuLogo = getBase64('nu-logo.png');

// Photos
const sutPhoto = getBase64('sut.jpg');
const ibmPhoto = getBase64('ibm.jpg');
const cmuPhoto = getBase64('chiang.jpeg');
const psuPhoto = getBase64('สงขลาน.jpg');
const nuPhoto = getBase64('นเรศวร.jpg');

const svgs = {
  // 1. SUT (Korat Hub)
  'venue-sut.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-inner-sut">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="overlay-sut" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b093f" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#280d5a" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#1b093f" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="shadow-text" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <!-- Outer background -->
  <rect width="400" height="240" fill="#1b093f"/>

  <!-- Photo filling the inner card frame -->
  <g clip-path="url(#card-inner-sut)">
    <image href="${sutPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#overlay-sut)"/>
  </g>

  <!-- Card Frame border -->
  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#b796f6" stroke-width="2.5"/>

  <!-- Logo Badge -->
  <rect x="176" y="32" width="48" height="48" rx="12" fill="white" opacity="0.95"/>
  <image href="${sutLogo}" x="180" y="36" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>

  <!-- Text Overlay -->
  <g filter="url(#shadow-text)">
    <text x="200" y="108" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Korat Hub</text>
    <text x="200" y="134" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#f0e6ff">Suranaree University of Technology</text>
    <text x="200" y="162" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13" fill="#d6c6fc">31 October 2026</text>
    <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#fc9fc9">50 seats</text>
  </g>
</svg>`,

  // 2. IBM Thailand (Bangkok Hub)
  'venue-bangkok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-inner-bkk">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="overlay-bkk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f0529" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#150836" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0f0529" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="shadow-text-bkk" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#0f0529"/>

  <g clip-path="url(#card-inner-bkk)">
    <image href="${ibmPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#overlay-bkk)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#f86dad" stroke-width="2.5"/>

  <!-- IBM Logo Badge -->
  <rect x="156" y="32" width="88" height="46" rx="10" fill="white" opacity="0.95"/>
  <image href="${ibmLogo}" x="160" y="35" width="80" height="40" preserveAspectRatio="xMidYMid meet"/>

  <g filter="url(#shadow-text-bkk)">
    <text x="200" y="108" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Bangkok Hub</text>
    <text x="200" y="134" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#fc9fc9">IBM Thailand</text>
    <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#b796f6">40 seats</text>
  </g>
</svg>`,

  // 3. Online Session
  'venue-online.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#0b0420"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#150836" stroke="#0071fd" stroke-width="2.5"/>

  <circle cx="200" cy="85" r="45" fill="none" stroke="#b796f6" stroke-width="2.5" opacity="0.8"/>
  <circle cx="200" cy="85" r="30" fill="none" stroke="#f86dad" stroke-width="2"/>
  <circle cx="200" cy="85" r="18" fill="#0071fd"/>

  <line x1="145" y1="85" x2="90" y2="45" stroke="#b796f6" stroke-width="2"/>
  <line x1="255" y1="85" x2="310" y2="45" stroke="#b796f6" stroke-width="2"/>
  <line x1="200" y1="130" x2="200" y2="155" stroke="#f86dad" stroke-width="2"/>

  <circle cx="90" cy="45" r="9" fill="#f86dad"/>
  <circle cx="310" cy="45" r="9" fill="#f86dad"/>

  <circle cx="200" cy="85" r="26" fill="white" opacity="0.95"/>
  <image href="${qiskitLogo}" x="178" y="63" width="44" height="44" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="162" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Online Session</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13" fill="#a5b4fc">10, 17, 24 October 2026</text>
</svg>`,

  // 4. Chiang Mai Hub
  'venue-chiangmai.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-inner-cmu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="overlay-cmu" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f331d" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#1a4d2e" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#0f331d" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="shadow-text-cmu" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#0f331d"/>

  <!-- Photo chiang.jpeg filling the entire inner card frame -->
  <g clip-path="url(#card-inner-cmu)">
    <image href="${cmuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#overlay-cmu)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#95d5b2" stroke-width="2.5"/>

  <!-- CMU Logo Badge -->
  <rect x="176" y="32" width="48" height="48" rx="12" fill="white" opacity="0.95"/>
  <image href="${cmuLogo}" x="180" y="36" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>

  <g filter="url(#shadow-text-cmu)">
    <text x="200" y="108" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Chiang Mai Hub</text>
    <text x="200" y="134" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#b7e4c7">Chiang Mai University</text>
    <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#95d5b2">30 seats</text>
  </g>
</svg>`,

  // 5. Southern Hub (PSU)
  'venue-psu.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-inner-psu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="overlay-psu" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#022759" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#0077b6" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#022759" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="shadow-text-psu" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#022759"/>

  <g clip-path="url(#card-inner-psu)">
    <image href="${psuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#overlay-psu)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#90e0ef" stroke-width="2.5"/>

  <!-- PSU Logo Badge -->
  <rect x="176" y="32" width="48" height="48" rx="12" fill="white" opacity="0.95"/>
  <image href="${psuLogo}" x="180" y="36" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>

  <g filter="url(#shadow-text-psu)">
    <text x="200" y="108" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Southern Hub</text>
    <text x="200" y="134" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#caf0f8">Prince of Songkla University</text>
    <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#90e0ef">30 seats</text>
  </g>
</svg>`,

  // 6. Phitsanulok Hub (NU)
  'venue-phitsanulok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-inner-nu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="overlay-nu" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b1578" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#5b21b6" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#3b1578" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="shadow-text-nu" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#3b1578"/>

  <g clip-path="url(#card-inner-nu)">
    <image href="${nuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#overlay-nu)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#c4b5fd" stroke-width="2.5"/>

  <!-- NU Logo Badge -->
  <rect x="176" y="32" width="48" height="48" rx="12" fill="white" opacity="0.95"/>
  <image href="${nuLogo}" x="180" y="36" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>

  <g filter="url(#shadow-text-nu)">
    <text x="200" y="108" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Phitsanulok Hub</text>
    <text x="200" y="134" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#ddd6fe">Naresuan University</text>
    <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#c4b5fd">30 seats</text>
  </g>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join('public', 'assets', filename), content, 'utf8');
  console.log('Updated full card background:', filename);
}
