import fs from 'node:fs/promises';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';

export const combineFiles = async (dirPath, outputFile) => {
  const wStream = createWriteStream(outputFile);
  const files = await fs.readdir(dirPath);
  const textFiles = files.filter(file => path.extname(file) === '.txt');

  for (const file of textFiles) {
    const filePath = path.join(dirPath, file);
    const rStream = createReadStream(filePath);

    await new Promise((resolve, reject) => {
      wStream.write(`[${path.basename(file, '.txt')}]\n`, 'utf-8');

      rStream.on('data', chunk => wStream.write(chunk));
      rStream.on('end', resolve);
      rStream.on('error', reject);
    });
  }
};
