import fs from 'fs';

function getWebpDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const header = buffer.toString('ascii', 0, 4);
  if (header !== 'RIFF') {
    throw new Error('Not a valid RIFF file');
  }
  const type = buffer.toString('ascii', 8, 12);
  if (type !== 'WEBP') {
    throw new Error('Not a valid WEBP file');
  }

  // WebP has multiple formats: VP8, VP8L, VP8X
  const format = buffer.toString('ascii', 12, 16);
  let width = 0;
  let height = 0;

  if (format === 'VP8 ') {
    // Lossy WebP
    const version = buffer.readUInt8(20);
    const horizontalScale = buffer.readUInt8(21);
    // Width is at offset 26 (16-bit)
    width = buffer.readUInt16LE(26) & 0x3fff;
    height = buffer.readUInt16LE(28) & 0x3fff;
  } else if (format === 'VP8L') {
    // Lossless WebP
    // The width/height are in the first 28 bits of the VP8L data
    const val = buffer.readUInt32LE(21);
    width = (val & 0x3fff) + 1;
    height = ((val >> 14) & 0x3fff) + 1;
  } else if (format === 'VP8X') {
    // Extended WebP
    // Width is at 24 (24-bit), Height at 27 (24-bit)
    width = (buffer.readUInt32LE(24) & 0xffffff) + 1;
    height = (buffer.readUInt32LE(27) & 0xffffff) + 1;
  }

  return { format, width, height, size: buffer.length };
}

try {
  console.log('hero-class-photo.webp:', getWebpDimensions('public/images/hero-class-photo.webp'));
} catch (e) {
  console.error('Error hero:', e.message);
}

try {
  console.log('owner-photo.webp:', getWebpDimensions('public/images/owner-photo.webp'));
} catch (e) {
  console.error('Error owner:', e.message);
}

try {
  console.log('logo.webp:', getWebpDimensions('public/images/logo.webp'));
} catch (e) {
  console.error('Error logo:', e.message);
}
