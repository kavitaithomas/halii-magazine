// convert pdfs to webp and writes a manifest.json
// run this once per issue every time a new PDF is added

import { fromPath } from "pdf2pic";
import path from "path";
import fs from "fs";

const PDF_DIR = "./pdfs"; // put your source PDFs here
const OUT_DIR = "./public/magazines"; // output goes to public folder

async function convertIssue(pdfFile: string, slug: string) {
  const outDir = path.join(OUT_DIR, slug);
  fs.mkdirSync(outDir, { recursive: true });

  const converter = fromPath(path.join(PDF_DIR, pdfFile), {
    density: 150, // 150dpi since it's online only
    saveFilename: "page",
    savePath: outDir,
    format: "webp",
    width: 1200,
    height: 1600,
  });

  console.log(`Converting ${pdfFile}...`);
  const results = await converter.bulk(-1); // -1 = all pages

  // Rename to zero-padded: page-001.webp, page-002.webp etc.
  results.forEach((r, i) => {
    const n = String(i + 1).padStart(3, "0");
    fs.renameSync(r.path!, path.join(outDir, `page-${n}.webp`));
  });

  // Copy first page as cover
  fs.copyFileSync(
    path.join(outDir, "page-001.webp"),
    path.join(outDir, "cover.webp")
  );

  // Write manifest
  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify({ slug, pageCount: results.length }, null, 2)
  );

  console.log(`✓ ${results.length} pages saved to /public/magazines/${slug}`);
}

// Usage: ts-node scripts/convertPdfs.ts
// Add your issues here:
convertIssue("spring-2024.pdf", "issue-01-spring-2024");
convertIssue("summer-2024.pdf", "issue-02-summer-2024");
