import fs from 'fs';

function checkHeader(filePath) {
  const buffer = fs.readFileSync(filePath);
  const hex = buffer.toString('hex', 0, 12);
  const ascii = buffer.toString('ascii', 0, 12);
  console.log(`${filePath}:`);
  console.log(`  Hex:   ${hex}`);
  console.log(`  Ascii: ${ascii}`);
  // Check typical headers:
  // PNG: 89 50 4e 47 0d 0a 1a 0a
  // JPEG: ff d8 ff
  // GIF: 47 49 46 38
}

checkHeader('public/images/hero-class-photo.webp');
checkHeader('public/images/owner-photo.webp');
checkHeader('public/images/logo.webp');
