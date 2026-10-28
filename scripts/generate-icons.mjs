// Generates favicons, iOS (apple-touch-icon) and web app manifest icons into /public.
// Run with: npm run icons
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const outDir = new URL('../public/', import.meta.url);

// Bowl with steam – same symbol as the logo badge (24×24 grid).
const bowl = `
  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/>
  <path d="M7 21h10"/>
  <path d="M19.5 12 22 6"/>
  <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"/>
  <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"/>
  <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/>`;

/**
 * @param {object} options
 * @param {number} options.radius    Corner radius of the background (0 = full bleed, for iOS / maskable).
 * @param {number} options.iconScale Share of the canvas taken by the bowl symbol.
 * @param {number} options.stroke    Stroke width on the 24px grid.
 */
function svg({ radius, iconScale, stroke }) {
  const size = 512;
  const icon = size * iconScale;
  const offset = (size - icon) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fb923c"/>
      <stop offset="1" stop-color="#ea580c"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#bg)"/>
  <g transform="translate(${offset} ${offset + icon * 0.02}) scale(${icon / 24})" fill="none" stroke="#fff" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${bowl}
  </g>
</svg>
`;
}

const favicon = svg({ radius: 116, iconScale: 0.66, stroke: 2.25 });
const fullBleed = svg({ radius: 0, iconScale: 0.58, stroke: 2 });
const maskable = svg({ radius: 0, iconScale: 0.48, stroke: 2 });

const png = (source, size) =>
  sharp(Buffer.from(source), { density: 72 * (size / 512) * 4 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();

/** Packs PNG images into a single .ico file (PNG-compressed entries). */
function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entry); // width
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1); // height
    header.writeUInt8(0, entry + 2); // palette
    header.writeUInt8(0, entry + 3); // reserved
    header.writeUInt16LE(1, entry + 4); // color planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(favicon, size) })));

const files = {
  'favicon.svg': favicon,
  'favicon.ico': ico(icoImages),
  'apple-touch-icon.png': await png(fullBleed, 180),
  'icon-192.png': await png(favicon, 192),
  'icon-512.png': await png(favicon, 512),
  'icon-maskable-512.png': await png(maskable, 512),
};

for (const [name, content] of Object.entries(files)) {
  await writeFile(new URL(name, outDir), content);
  console.log(`✓ public/${name}`);
}
