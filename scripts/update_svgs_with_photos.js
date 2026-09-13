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
const onlinePhoto = fs.existsSync(path.join('public', 'assets', 'cloud_banner_2026.webp')) 
  ? getBase64('cloud_banner_2026.webp') 
  : '';

const svgs = {
  'venue-sut.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="sut-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b093f" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#3c1578" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <!-- Outer container background -->
  <rect width="400" height="240" fill="#1b093f"/>

  <!-- Inner clipped card content -->
  <g clip-path="url(#card-clip)">
    <!-- Photo inside frame -->
    <image href="${sutPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <!-- Gradient overlay for text contrast -->
    <rect x="20" y="20" width="360" height="200" fill="url(#sut-overlay)"/>
  </g>

  <!-- Card Frame border -->
  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#b796f6" stroke-width="2"/>

  <!-- Logo badge at top center -->
  <rect x="172" y="32" width="56" height="56" rx="12" fill="white" opacity="0.95"/>
  <image href="${sutLogo}" x="176" y="36" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>

  <!-- Text details -->
  <text x="200" y="118" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Korat Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#d6c6fc">Suranaree University of Technology</text>
  <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13" fill="#b796f6">31 October 2026</text>
  <text x="200" y="192" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#fc9fc9">50 seats</text>
</svg>`,

  'venue-bangkok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip-bkk">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="bkk-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f0529" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#2a0d58" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <rect width="400" height="240" fill="#0f0529"/>

  <g clip-path="url(#card-clip-bkk)">
    <image href="${ibmPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#bkk-overlay)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#f86dad" stroke-width="2"/>

  <!-- IBM logo badge -->
  <rect x="150" y="30" width="100" height="52" rx="10" fill="white" opacity="0.95"/>
  <image href="${ibmLogo}" x="155" y="34" width="90" height="44" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Bangkok Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#fc9fc9">IBM Thailand</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#b796f6">40 seats</text>
</svg>`,

  'venue-online.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip-online">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="online-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#080218" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#140836" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <rect width="400" height="240" fill="#080218"/>

  <g clip-path="url(#card-clip-online)">
    ${onlinePhoto ? `<image href="${onlinePhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>` : ''}
    <rect x="20" y="20" width="360" height="200" fill="url(#online-overlay)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#0071fd" stroke-width="2"/>

  <circle cx="200" cy="60" r="30" fill="white" opacity="0.95"/>
  <image href="${qiskitLogo}" x="175" y="35" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="122" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Online Session</text>
  <text x="200" y="148" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#a5b4fc">Online Lectures</text>
  <text x="200" y="174" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#818cf8">10, 17, 24 October 2026</text>
</svg>`,

  'venue-chiangmai.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip-cmu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="cmu-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f331d" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#215237" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <rect width="400" height="240" fill="#0f331d"/>

  <g clip-path="url(#card-clip-cmu)">
    <image href="${cmuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#cmu-overlay)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#95d5b2" stroke-width="2"/>

  <rect x="172" y="30" width="56" height="56" rx="12" fill="white" opacity="0.95"/>
  <image href="${cmuLogo}" x="176" y="34" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Chiang Mai Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#b7e4c7">Chiang Mai University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#95d5b2">30 seats</text>
</svg>`,

  'venue-psu.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip-psu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="psu-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#022759" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#023e8a" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <rect width="400" height="240" fill="#022759"/>

  <g clip-path="url(#card-clip-psu)">
    <image href="${psuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#psu-overlay)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#90e0ef" stroke-width="2"/>

  <rect x="172" y="30" width="56" height="56" rx="12" fill="white" opacity="0.95"/>
  <image href="${psuLogo}" x="176" y="34" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Southern Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#caf0f8">Prince of Songkla University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#90e0ef">30 seats</text>
</svg>`,

  'venue-phitsanulok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="card-clip-nu">
      <rect x="20" y="20" width="360" height="200" rx="16"/>
    </clipPath>
    <linearGradient id="nu-overlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b1578" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#5b21b6" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <rect width="400" height="240" fill="#3b1578"/>

  <g clip-path="url(#card-clip-nu)">
    <image href="${nuPhoto}" x="20" y="20" width="360" height="200" preserveAspectRatio="xMidYMid slice"/>
    <rect x="20" y="20" width="360" height="200" fill="url(#nu-overlay)"/>
  </g>

  <rect x="20" y="20" width="360" height="200" rx="16" fill="none" stroke="#c4b5fd" stroke-width="2"/>

  <rect x="172" y="30" width="56" height="56" rx="12" fill="white" opacity="0.95"/>
  <image href="${nuLogo}" x="176" y="34" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>

  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Phitsanulok Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#ddd6fe">Naresuan University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#c4b5fd">30 seats</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join('public', 'assets', filename), content, 'utf8');
  console.log('Updated with photo inside frame:', filename);
}
