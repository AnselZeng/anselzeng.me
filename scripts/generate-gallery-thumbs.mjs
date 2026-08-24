import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const EXT = /\.(jpe?g|png|webp)$/i;

const STRIP_SKIP = new Set(['griffith.jpeg', 'oscars.jpeg', 'innout.jpeg', 'vct.jpeg']);

const JOBS = [
  {
    root: path.join(process.cwd(), 'public', 'gallery'),
    thumbs: path.join(process.cwd(), 'public', 'gallery', 'thumbs'),
    skipDirs: new Set(['thumbs']),
    skipFiles: new Set(),
    recursive: true,
    width: 640,
    height: 480,
  },
  {
    root: path.join(process.cwd(), 'public', 'about'),
    thumbs: path.join(process.cwd(), 'public', 'about', 'thumbs'),
    skipDirs: new Set(['thumbs']),
    skipFiles: STRIP_SKIP,
    recursive: false,
    width: 640,
    height: 480,
  },
  {
    root: path.join(process.cwd(), 'public', 'about', 'movies-shows'),
    thumbs: path.join(process.cwd(), 'public', 'about', 'thumbs', 'movies-shows'),
    skipDirs: new Set(['thumbs']),
    skipFiles: new Set(),
    recursive: true,
    width: 480,
    height: 720,
  },
  {
    root: path.join(process.cwd(), 'public', 'design'),
    thumbs: path.join(process.cwd(), 'public', 'design', 'thumbs'),
    skipDirs: new Set(['thumbs']),
    skipFiles: new Set(),
    recursive: false,
    width: 640,
    height: 480,
  },
  {
    root: path.join(process.cwd(), 'public', 'blog'),
    thumbs: path.join(process.cwd(), 'public', 'blog', 'thumbs'),
    skipDirs: new Set(['thumbs']),
    skipFiles: new Set(),
    skipNumbered: true,
    recursive: true,
    // Covers are ~16:9; post heroes are 16:9. A 4:3 crop reads as zoomed-in.
    width: 1280,
    height: 720,
  },
  {
    root: path.join(process.cwd(), 'public', 'blog'),
    thumbs: path.join(process.cwd(), 'public', 'blog', 'thumbs'),
    skipDirs: new Set(['thumbs']),
    skipFiles: new Set(),
    onlyNumbered: true,
    recursive: true,
    // In-post photos are 3:4 (3024×4032); grid cells are portrait.
    width: 640,
    height: 853,
  },
];

function walk(dir, { recursive, skipDirs, skipFiles, skipNumbered, onlyNumbered }, prefix = '') {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || skipDirs.has(entry.name) || skipFiles.has(entry.name)) continue;
    const numbered = /^\d+\./.test(entry.name);
    if (skipNumbered && numbered) continue;
    if (onlyNumbered && entry.isFile() && !numbered) continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        files.push(
          ...walk(abs, { recursive, skipDirs, skipFiles, skipNumbered, onlyNumbered }, rel),
        );
      }
    } else if (entry.isFile() && EXT.test(entry.name)) {
      files.push({ abs, rel });
    }
  }
  return files;
}

let total = 0;
for (const job of JOBS) {
  const images = walk(job.root, job);
  await Promise.all(
    images.map(async ({ abs, rel }) => {
      const out = path.join(job.thumbs, rel.replace(/\.[^.]+$/, '.webp'));
      fs.mkdirSync(path.dirname(out), { recursive: true });
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(abs).mtimeMs) {
        return;
      }
      await sharp(abs)
        .rotate()
        .resize(job.width, job.height, { fit: 'cover' })
        .webp({ quality: 58 })
        .toFile(out);
    }),
  );
  total += images.length;
  console.log(`${path.relative(process.cwd(), job.root)}: ${images.length}`);
}

const PORTRAITS = [
  ...['griffith.jpeg', 'oscars.jpeg', 'innout.jpeg', 'vct.jpeg'].map((file) => ({
    abs: path.join(process.cwd(), 'public', 'about', file),
    out: path.join(
      process.cwd(),
      'public',
      'about',
      'thumbs',
      `${file.replace(/\.[^.]+$/, '')}-portrait.webp`,
    ),
    width: 768,
    height: 1024,
  })),
  {
    abs: path.join(process.cwd(), 'public', 'home', 'usc.jpeg'),
    out: path.join(process.cwd(), 'public', 'home', 'thumbs', 'usc-portrait.webp'),
    width: 768,
    height: 1024,
  },
  {
    abs: path.join(process.cwd(), 'public', 'about', 'music', 'halo.png'),
    out: path.join(process.cwd(), 'public', 'about', 'thumbs', 'halo.webp'),
    width: 640,
    height: 640,
  },
];

for (const portrait of PORTRAITS) {
  fs.mkdirSync(path.dirname(portrait.out), { recursive: true });
  if (
    !fs.existsSync(portrait.out) ||
    fs.statSync(portrait.out).mtimeMs < fs.statSync(portrait.abs).mtimeMs
  ) {
    await sharp(portrait.abs)
      .rotate()
      .resize(portrait.width, portrait.height, { fit: 'cover' })
      .webp({ quality: 62 })
      .toFile(portrait.out);
  }
  total += 1;
}

console.log(`thumbs: ${total}`);
