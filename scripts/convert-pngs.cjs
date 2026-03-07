// scripts/convertPdfs.cjs
// Converts a folder of PNGs (1.png, 2.png ...) to WebP
// and writes a manifest.json for each issue
// usage: node scripts/convert-pngs.cjs

const webp = require("webp-converter");
const path = require("path");
const fs = require("fs");

const PNG_DIR = "./pngs"; // folder containing one subfolder per issue
const OUT_DIR = "./public/magazines";

webp.grant_permission(); // required by webp-converter

async function convertIssue(issueFolder, slug) {
  const inDir = path.join(PNG_DIR, issueFolder);
  const outDir = path.join(OUT_DIR, slug);
  fs.mkdirSync(outDir, { recursive: true });

  // Get all PNGs sorted numerically: 1.png, 2.png ... 20.png
  const files = fs
    .readdirSync(inDir)
    .filter((f) => f.endsWith(".png"))
    .sort((a, b) => parseInt(a) - parseInt(b));

  console.log(`Converting ${issueFolder} (${files.length} pages)...`);

  for (let i = 0; i < files.length; i++) {
    const n = String(i + 1).padStart(3, "0");
    const inputPath = path.join(inDir, files[i]);
    const outputPath = path.join(outDir, `page-${n}.webp`);

    await webp.cwebp(inputPath, outputPath, "-q 85");
    console.log(`  page ${n} done`);
  }

  // Copy first page as cover
  fs.copyFileSync(
    path.join(outDir, "page-001.webp"),
    path.join(outDir, "cover.webp")
  );

  // Write manifest
  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify({ slug, pageCount: files.length }, null, 2)
  );

  console.log(`✓ ${files.length} pages saved to /public/magazines/${slug}`);
}

// Add your issues here — first arg is the folder name inside /png,
// second arg is the slug used in the URL and /public/magazines:
convertIssue("babys first issue", "issue-01-babys-first-issue");
