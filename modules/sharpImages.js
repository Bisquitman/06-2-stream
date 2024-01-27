import sharp from 'sharp';
import fs from 'node:fs';

export const resizeImage = async (inputPath, outputPath) => {
  const rStream = fs.createReadStream(inputPath);
  const wStream = fs.createWriteStream(outputPath);

  rStream.pipe(sharp().resize(400, 400).jpeg()).pipe(wStream);
};

export const grayscaleAndBlurImage = async (inputPath, outputPath) => {
  const rStream = fs.createReadStream(inputPath);
  const wStream = fs.createWriteStream(outputPath);

  rStream.pipe(sharp().greyscale().blur()).pipe(wStream);
};
