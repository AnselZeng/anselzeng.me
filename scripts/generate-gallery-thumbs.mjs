import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const ROOT = path.join(process.cwd(), 'public', 'gallery');
const THUMBS = path.join(ROOT, 'thumbs');
const EXT = /\.(jpe?g|png|webp)$/i;

function walk(dir, prefix = '') {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'thumbs') continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(abs, rel));
    else if (entry.isFile() && EXT.test(entry.name)) files.push({ abs, rel });
  }
  return files;
}

const images = walk(ROOT);
await Promise.all(
  images.map(async ({ abs, rel }) => {
    const out = path.join(THUMBS, rel.replace(/\.[^.]+$/, '.webp'));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(abs).mtimeMs) {
      return;
    }
    await sharp(abs)
      .rotate()
      .resize(640, 480, { fit: 'cover' })
      .webp({ quality: 58 })
      .toFile(out);
  }),
);

console.log(`gallery thumbs: ${images.length}`);
