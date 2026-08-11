/**
 * Downloads store screenshots for the shipped games and emits responsive
 * avif/webp variants into public/images/projects/.
 *
 * Sources are the public store listings for Akaash's own titles. Re-run only
 * when a store listing changes; the generated files are committed.
 *
 * Run: npm run fetch:store-media
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const OUT_DIR = path.resolve(process.cwd(), 'public', 'images', 'projects');
const WIDTHS = [800, 1600];

/* Google's image proxy takes a size suffix; ask for a large render. */
const play = (id) => `https://play-lh.googleusercontent.com/${id}=w1600`;
const steam = (hash) =>
  `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2726410/ss_${hash}.1920x1080.jpg`;

const MANIFEST = [
  {
    slug: 'rush-hour-drive-faster',
    sources: [
      play('p4DCufPas8s2GkFbA4-LMrpRZ-10RrY_2E-sEcmXAm8AA_SFkDPtH1vby3xCmazs4_uWAvGH5HXdykDGPZcb1Q'),
      play('MJe8wss6OAQLKFvi9-L2K65VOpaIvlrBFaL37_HURcivokUhf7MA-qaWI3oeOwHEOp1IZitALENHxw5sLfyvl30'),
      play('2X4LNBvv63WC7VSKSjtb4IUjtjvC_z8FX_-B3rfiUkTREw4Gvk6Tj_AAuOvUvTK62ZoqxHnoycvd43ZSr-x2b9Q'),
      play('Zoaym5YtsQrJ4muVl_U96DjVTOfF1Mi2QSqxrDncXB02G1Z2SKYlzcTAxdbEBZLlIhp3SD0I8Lnm6QisWxMwag'),
    ],
  },
  {
    slug: 'hide-and-seek',
    sources: [
      play('sQ3icp308oRSFIYHKB_FlQNiXLg4As60dw9w8LAblHz0l8Yq1E4k_YRuHCwmrYM6KSsLcn0vtuANiA4k-H8vESk'),
      play('_zlVmWl5mdrG2vCKwIbemGdFMmVtT-bGaaMRWNuWQlm4uz9vgWr_Jg40N_-ShvshX54Zg8uMkXPh7pI5eCrx'),
      play('GMq14EqxvDd69xwWWbNUeDe0shKjN61MQrJnBIVeCNb0pWRqyqStF2XZ-sNv1I6ra74j5QmXpzuaQojBCms_6Q'),
      play('e6vNqgIhcD4rjQrmfLghFBNuLJeqsB5E9VR-XLRyNM8Cnow01Yp9fpvSBn8Gj8dFVt5FUctrXerIg6gNjdzp2g'),
    ],
  },
  {
    slug: 'another-battle-simulator',
    sources: [
      play('iV36BxBlv25krrppkVf8xLRsRbsDUfguO6lamvsRkZrkbl6RN03l6driW0Q9arDQ-63UJ1Kebqx5pPBpYh9AHg'),
      play('_KbxxBThh5HMYzyUAnHEnXs4md0jBwKvBO-bKS_ecOKW6TEhOQzes_DR_3Oco7McRHe8WdjJrpwnkCinflpf_Q'),
      play('A51gdPfID6b8xPLhVVHOE_uYh8C7DROtatWX9bAGW6W9hne9Mp6gLRkbJaRha2CEo7wVH_8SoDObchUCfrmS'),
      play('OnTByLRB4h-zHmekbuSJ7D0FUdFiujxlRf3oTGnv1qy9vhP6bhTLhDdUFLFDHIg2lVAgyiHfm0LDLu_R6GoGtd8'),
    ],
  },
  {
    slug: 'ruins-of-the-forgotten',
    sources: [
      steam('5b08ff23b060c7ad2c5e15a9f84cd8c66abcd8d4'),
      steam('6241f0742ba8278c7672a8f262379dee70a6ecad'),
      steam('f8874310c35f389409b3f35de39df5654fde13a2'),
      steam('d24996c1f6fa65a7c75d24f8b3d4b1ccf7b4d37b'),
      steam('72c1ea8ac283ff9a3976e29ea877159df7330556'),
      steam('7d1bb52cbb93923022740b802bcdeba916faf111'),
    ],
  },
];

/**
 * Legacy akaashgarg.com media. Only genuine product screenshots are listed
 * here -- the old site also hosts stock photography and AI-generated concept
 * art for several projects, which is deliberately excluded.
 */
const wp = (p) => `https://akaashgarg.com/wp-content/uploads/${p}`;

MANIFEST.push(
  {
    slug: 'bachelors-night-out',
    sources: [
      wp('2021/07/Bachelors-Night-Entry.jpg'),
      wp('2021/07/Bachelors-Night-Club-Area.jpg'),
      wp('2021/07/Bachelors-Night-Bouncer-Area.jpg'),
      wp('2021/07/Bachelors-Night-Fight-Area.jpg'),
    ],
  },
  {
    slug: 'captive',
    sources: [wp('2021/07/Captive-Cover.png'), wp('2021/07/Captive-Portfolio.jpg')],
  },
  {
    slug: 'retail-ar',
    sources: [
      wp('2022/12/Retail-AR-App-Home-Page.jpg'),
      wp('2022/12/Retail-AR-App-Product-Page.jpg'),
      wp('2022/12/Retail-AR-App-AR-Page.jpg'),
    ],
  },
  {
    slug: 'vr-school',
    sources: [
      wp('2022/09/VR-School-1.png'),
      wp('2022/09/VR-School-2.png'),
      wp('2022/09/VR-School-3.png'),
      wp('2022/09/VR-School-4.png'),
    ],
  },
  {
    slug: 'ar-design-review-platform',
    sources: [wp('2022/06/CollaboratAR_ScreenShot.png')],
  },
);

async function download(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (portfolio asset build)' },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return Buffer.from(await response.arrayBuffer());
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const report = [];

  for (const { slug, sources } of MANIFEST) {
    for (const [index, url] of sources.entries()) {
      const n = index + 1;
      let buffer;
      try {
        buffer = await download(url);
      } catch (error) {
        console.error(`  FAILED ${slug} #${n}: ${error.message}`);
        continue;
      }

      const meta = await sharp(buffer).metadata();
      for (const width of WIDTHS) {
        const base = path.join(OUT_DIR, `${slug}-shot-${n}-${width}`);
        await sharp(buffer).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${base}.webp`);
        await sharp(buffer).resize({ width, withoutEnlargement: true }).avif({ quality: 55 }).toFile(`${base}.avif`);
      }
      report.push(`${slug}-shot-${n}  source ${meta.width}x${meta.height}`);
      console.log(`  ok ${slug}-shot-${n} (${meta.width}x${meta.height})`);
    }
  }

  console.log(`\n${report.length} screenshots processed into ${OUT_DIR}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
