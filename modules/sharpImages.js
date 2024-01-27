import sharp from 'sharp';

export const resizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath).resize(400, 400).toFormat('jpeg').toFile(outputPath);
  } catch (error) {
    console.error('Error processing image:', error);
  }
};

export const greyAndBlur = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(400, 400)
      .greyscale()
      .blur(1)
      .toFormat('jpeg')
      .toFile(outputPath);
  } catch (error) {
    console.error('Error processing image:', error);
  }
};
