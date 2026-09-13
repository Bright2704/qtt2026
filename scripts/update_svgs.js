const fs = require('fs');
const path = require('path');

function getBase64(file) {
  const filePath = path.join('public', 'assets', file);
  const buffer = fs.readFileSync(filePath);
  let mime = 'image/png';
  if (file.endsWith('.webp')) mime = 'image/webp';
  if (file.endsWith('.svg')) mime = 'image/svg+xml';
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) mime = 'image/jpeg';
  return 'data:' + mime + ';base64,' + buffer.toString('base64');
}

const sutB64 = getBase64('sut-logo.png');
const ibmB64 = getBase64('ibm-quantum-logo.png');
const qiskitB64 = getBase64('qiskit-logo.svg');
const cmuB64 = getBase64('cmu-logo.webp');
const psuB64 = getBase64('psu-logo.png');
const nuB64 = getBase64('nu-logo.png');

const svgs = {
  'venue-sut.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#280d5a"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#461d8a" stroke="#b796f6" stroke-width="2"/>
  <circle cx="340" cy="60" r="16" fill="#b796f6" opacity="0.6"/>
  <circle cx="320" cy="180" r="20" fill="#f86dad" opacity="0.4"/>
  <rect x="170" y="30" width="60" height="60" rx="12" fill="white" opacity="0.95"/>
  <image href="${sutB64}" x="175" y="35" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="118" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Korat Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#d6c6fc">Suranaree University of Technology</text>
  <text x="200" y="168" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="13" fill="#b796f6">31 October 2026</text>
  <text x="200" y="192" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#fc9fc9">50 seats</text>
</svg>`,

  'venue-bangkok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#150836"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#321568" stroke="#f86dad" stroke-width="2"/>
  <circle cx="300" cy="90" r="30" fill="#f86dad" opacity="0.2"/>
  <rect x="150" y="30" width="100" height="54" rx="10" fill="white" opacity="0.95"/>
  <image href="${ibmB64}" x="155" y="34" width="90" height="46" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Bangkok Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#fc9fc9">IBM Thailand</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#b796f6">40 seats</text>
</svg>`,

  'venue-online.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#0b0420"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#150836" stroke="#0071fd" stroke-width="2"/>
  <circle cx="200" cy="60" r="32" fill="white" opacity="0.95"/>
  <image href="${qiskitB64}" x="174" y="34" width="52" height="52" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="122" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Online Session</text>
  <text x="200" y="148" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#a5b4fc">Online Lectures</text>
  <text x="200" y="174" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#818cf8">10, 17, 24 October 2026</text>
</svg>`,

  'venue-chiangmai.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#1a4d2e"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#2d6a4f" stroke="#95d5b2" stroke-width="2"/>
  <path d="M60 190 L110 130 L160 190 Z" fill="#40916c" opacity="0.5"/>
  <path d="M240 190 L310 110 L380 190 Z" fill="#52b788" opacity="0.4"/>
  <rect x="170" y="30" width="60" height="60" rx="12" fill="white" opacity="0.95"/>
  <image href="${cmuB64}" x="175" y="35" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Chiang Mai Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#b7e4c7">Chiang Mai University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#95d5b2">30 seats</text>
</svg>`,

  'venue-psu.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#0077b6"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#023e8a" stroke="#90e0ef" stroke-width="2"/>
  <ellipse cx="200" cy="180" rx="150" ry="25" fill="#0096c7" opacity="0.3"/>
  <rect x="170" y="30" width="60" height="60" rx="12" fill="white" opacity="0.95"/>
  <image href="${psuB64}" x="175" y="35" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Southern Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#caf0f8">Prince of Songkla University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#90e0ef">30 seats</text>
</svg>`,

  'venue-phitsanulok.svg': `<svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="240" fill="#7c3aed"/>
  <rect x="20" y="20" width="360" height="200" rx="16" fill="#5b21b6" stroke="#c4b5fd" stroke-width="2"/>
  <rect x="170" y="30" width="60" height="60" rx="12" fill="white" opacity="0.95"/>
  <image href="${nuB64}" x="175" y="35" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="116" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="18" font-weight="600" fill="white">Phitsanulok Hub</text>
  <text x="200" y="142" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="14" fill="#ddd6fe">Naresuan University</text>
  <text x="200" y="172" text-anchor="middle" font-family="IBM Plex Sans Thai, sans-serif" font-size="12" fill="#c4b5fd">30 seats</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join('public', 'assets', filename), content, 'utf8');
  console.log('Updated:', filename);
}
