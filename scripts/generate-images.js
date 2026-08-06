import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve(process.cwd(), 'public', 'images', 'projects');

async function run() {
  let entries;
  try {
    entries = await fs.readdir(srcDir);
  } catch (e) {
    console.error('Could not read directory', srcDir, e);
    return;
  }

  const svgFiles = entries.filter((f) => f.toLowerCase().endsWith('.svg'));
  if (!svgFiles.length) {
    console.log('No SVG files found in', srcDir);
    return;
  }

  for (const fileName of svgFiles) {
    const full = path.join(srcDir, fileName);
    const base = path.basename(fileName, '.svg');
    const sizes = [];
    if (base.includes('-400')) sizes.push(400);
    if (base.includes('-800')) sizes.push(800);
    if (base.endsWith('-1')) sizes.push(1200);
    if (!sizes.length) sizes.push(1200);

    for (const w of sizes) {
      const name = `${base}`; // keep exact base
      const outWebp = path.join(srcDir, `${name}.webp`);
      const outAvif = path.join(srcDir, `${name}.avif`);

      try {
        await sharp(full, { density: 300 })
          .resize({ width: w })
          .webp({ quality: 80 })
          .toFile(outWebp);
        await sharp(full, { density: 300 })
          .resize({ width: w })
          .avif({ quality: 50 })
          .toFile(outAvif);
        console.log('Generated', path.basename(outWebp), path.basename(outAvif));
      } catch (err) {
        console.error('Failed to convert', full, err);
      }
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
