import { combineFiles } from './modules/combineFiles.js';

// Путь до каталога
const srcDirPath = './test';

// Выходной файл
const destFileName = 'output.txt';

const app = async () => {
  try {
    await combineFiles(srcDirPath, destFileName);
  } catch (error) {
    console.error(error);
  }
};

app();
