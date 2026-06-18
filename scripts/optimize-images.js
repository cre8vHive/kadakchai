import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesDir = path.resolve('src/files');

async function optimizeImages() {
  const files = fs.readdirSync(filesDir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(filesDir, file);
      const outputPath = path.join(filesDir, `${baseName}.webp`);

      console.log(`Optimizing ${file}...`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`✅ Converted to ${baseName}.webp`);
        
        // Delete original file to save space and force import updates
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`❌ Failed to optimize ${file}:`, err);
      }
    }
  }

  console.log('Optimization complete!');
}

optimizeImages();
