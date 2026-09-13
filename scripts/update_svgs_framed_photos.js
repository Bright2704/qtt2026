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
    <clipPath id="photo-frame-sut">
      <rect x="120" y="26" width="160" height="92" rx="12"/>
    </clipPath>
    <filter id="shadow-sut" x="0" y="0" width="400" height="240" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Card Background -->
  <rect width="400" height="240" fill="#280d5a"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#461d8a" stroke="#b796f6" stroke-width="2"/>
  
  <!-- Decorative background circles -->
  <circle cx="55" cy="55" r="20" fill="#f86dad" opacity="0.3"/>
  <circle cx="345" cy="55" r="16" fill="#b796f6" opacity="0.4"/>
  <circle cx="330" cy="180" r="18" fill="#f86dad" opacity="0.3"/>

  <!-- Photo Frame Box -->
  <g filter="url(#shadow-sut)">
    <!-- Photo inside frame -->
    <g clip-path="url(#photo-frame-sut)">
      <image href="${sutPhoto}" x="120" y="26" width="160" height="92" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <!-- Photo Frame Border -->
    <rect x="120" y="26" width="160" height="92" rx="12" fill="none" stroke="#b796f6" stroke-width="2.5"/>
  </g>

  <!-- Logo Badge on frame corner -->
  <rect x="250" y="18" width="38" height="38" rx="10" fill="white" stroke="#b796f6" stroke-width="1.5"/>
  <image href="${sutLogo}" x="253" y="21" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>

  <!-- Text Details -->
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Korat Hub</text>
  <text x="200" y="165" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13.5" fill="#d6c6fc">Suranaree University of Technology</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#b796f6">31 October 2026  •  50 seats</text>
</svg>`,

  // 2. IBM Thailand (Bangkok Hub)
  'venue-bangkok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="photo-frame-bkk">
      <rect x="120" y="26" width="160" height="92" rx="12"/>
    </clipPath>
    <filter id="shadow-bkk" x="0" y="0" width="400" height="240" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#150836"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#321568" stroke="#f86dad" stroke-width="2"/>

  <!-- Background decorative shapes -->
  <rect x="45" y="45" width="40" height="60" rx="6" fill="#461d8a" opacity="0.5"/>
  <circle cx="330" cy="70" r="24" fill="#f86dad" opacity="0.25"/>

  <!-- Photo Frame Box -->
  <g filter="url(#shadow-bkk)">
    <g clip-path="url(#photo-frame-bkk)">
      <image href="${ibmPhoto}" x="120" y="26" width="160" height="92" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="120" y="26" width="160" height="92" rx="12" fill="none" stroke="#f86dad" stroke-width="2.5"/>
  </g>

  <!-- IBM Logo Badge -->
  <rect x="235" y="18" width="58" height="34" rx="8" fill="white" stroke="#f86dad" stroke-width="1.5"/>
  <image href="${ibmLogo}" x="239" y="21" width="50" height="28" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Bangkok Hub</text>
  <text x="200" y="165" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13.5" fill="#fc9fc9">IBM Thailand</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#b796f6">40 seats</text>
</svg>`,

  // 3. Online Session
  'venue-online.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#0b0420"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#150836" stroke="#0071fd" stroke-width="2"/>

  <!-- Diagram background -->
  <circle cx="200" cy="80" r="45" fill="none" stroke="#b796f6" stroke-width="2.5" opacity="0.8"/>
  <circle cx="200" cy="80" r="30" fill="none" stroke="#f86dad" stroke-width="2"/>
  <circle cx="200" cy="80" r="18" fill="#0071fd"/>

  <line x1="145" y1="80" x2="90" y2="45" stroke="#b796f6" stroke-width="2"/>
  <line x1="255" y1="80" x2="310" y2="45" stroke="#b796f6" stroke-width="2"/>
  <line x1="200" y1="125" x2="200" y2="150" stroke="#f86dad" stroke-width="2"/>

  <circle cx="90" cy="45" r="9" fill="#f86dad"/>
  <circle cx="310" cy="45" r="9" fill="#f86dad"/>

  <!-- Qiskit Logo Badge -->
  <rect x="245" y="22" width="38" height="38" rx="10" fill="white" stroke="#0071fd" stroke-width="1.5"/>
  <image href="${qiskitLogo}" x="248" y="25" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="166" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Online Session</text>
  <text x="200" y="190" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13" fill="#a5b4fc">10, 17, 24 October 2026</text>
</svg>`,

  // 4. Chiang Mai Hub
  'venue-chiangmai.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="photo-frame-cmu">
      <rect x="120" y="26" width="160" height="92" rx="12"/>
    </clipPath>
    <filter id="shadow-cmu" x="0" y="0" width="400" height="240" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#1a4d2e"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#2d6a4f" stroke="#95d5b2" stroke-width="2"/>

  <!-- Background mountain shapes -->
  <path d="M50 180 L90 120 L130 180 Z" fill="#40916c" opacity="0.4"/>
  <path d="M280 180 L330 110 L380 180 Z" fill="#52b788" opacity="0.4"/>

  <!-- Photo Frame Box -->
  <g filter="url(#shadow-cmu)">
    <g clip-path="url(#photo-frame-cmu)">
      <image href="${cmuPhoto}" x="120" y="26" width="160" height="92" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="120" y="26" width="160" height="92" rx="12" fill="none" stroke="#95d5b2" stroke-width="2.5"/>
  </g>

  <!-- CMU Logo Badge -->
  <rect x="250" y="18" width="38" height="38" rx="10" fill="white" stroke="#95d5b2" stroke-width="1.5"/>
  <image href="${cmuLogo}" x="253" y="21" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Chiang Mai Hub</text>
  <text x="200" y="165" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13.5" fill="#b7e4c7">Chiang Mai University</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#95d5b2">30 seats</text>
</svg>`,

  // 5. Southern Hub (PSU)
  'venue-psu.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="photo-frame-psu">
      <rect x="120" y="26" width="160" height="92" rx="12"/>
    </clipPath>
    <filter id="shadow-psu" x="0" y="0" width="400" height="240" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#0077b6"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#023e8a" stroke="#90e0ef" stroke-width="2"/>

  <ellipse cx="200" cy="190" rx="140" ry="20" fill="#0096c7" opacity="0.3"/>
  <circle cx="55" cy="65" r="22" fill="#f86dad" opacity="0.35"/>
  <circle cx="340" cy="85" r="16" fill="#b796f6" opacity="0.4"/>

  <!-- Photo Frame Box -->
  <g filter="url(#shadow-psu)">
    <g clip-path="url(#photo-frame-psu)">
      <image href="${psuPhoto}" x="120" y="26" width="160" height="92" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="120" y="26" width="160" height="92" rx="12" fill="none" stroke="#90e0ef" stroke-width="2.5"/>
  </g>

  <!-- PSU Logo Badge -->
  <rect x="250" y="18" width="38" height="38" rx="10" fill="white" stroke="#90e0ef" stroke-width="1.5"/>
  <image href="${psuLogo}" x="253" y="21" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Southern Hub</text>
  <text x="200" y="165" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13.5" fill="#caf0f8">Prince of Songkla University</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#90e0ef">30 seats</text>
</svg>`,

  // 6. Phitsanulok Hub (NU)
  'venue-phitsanulok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="photo-frame-nu">
      <rect x="120" y="26" width="160" height="92" rx="12"/>
    </clipPath>
    <filter id="shadow-nu" x="0" y="0" width="400" height="240" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="400" height="240" fill="#7c3aed"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#5b21b6" stroke="#c4b5fd" stroke-width="2"/>

  <rect x="50" y="90" width="50" height="80" rx="6" fill="#6d28d9" opacity="0.5"/>
  <rect x="300" y="100" width="50" height="60" rx="6" fill="#8b5cf6" opacity="0.4"/>

  <!-- Photo Frame Box -->
  <g filter="url(#shadow-nu)">
    <g clip-path="url(#photo-frame-nu)">
      <image href="${nuPhoto}" x="120" y="26" width="160" height="92" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="120" y="26" width="160" height="92" rx="12" fill="none" stroke="#c4b5fd" stroke-width="2.5"/>
  </g>

  <!-- NU Logo Badge -->
  <rect x="250" y="18" width="38" height="38" rx="10" fill="white" stroke="#c4b5fd" stroke-width="1.5"/>
  <image href="${nuLogo}" x="253" y="21" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="17" font-weight="600" fill="white">Phitsanulok Hub</text>
  <text x="200" y="165" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13.5" fill="#ddd6fe">Naresuan University</text>
  <text x="200" y="188" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#c4b5fd">30 seats</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join('public', 'assets', filename), content, 'utf8');
  console.log('Updated with picture frame window:', filename);
}
