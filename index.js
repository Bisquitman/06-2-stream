import { combineFiles } from './modules/combineFiles.js';
import { greyAndBlur, resizeImage } from './modules/sharpImages.js';

// Путь до каталога
const srcDirPath = './test';

// Выходной файл
const destFileName = 'output.txt';

const inputImage = './files/03.jpg';
const outputResizedImage = './files/03resized.jpg';
const outputGrayscaleImage = './files/03gray.jpg';

const app = async () => {
  try {
    await combineFiles(srcDirPath, destFileName);
  } catch (error) {
    console.error(error);
  }
};

const resizeImages = async () => {
  try {
    await resizeImage(inputImage, outputResizedImage);
    await greyAndBlur(inputImage, outputGrayscaleImage);
  } catch (error) {
    console.error(error);
  }
};

app();
resizeImages();
