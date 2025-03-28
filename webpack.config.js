import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator.js',
    library: {
      name: 'SimpleCalculator',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this'
  },
  mode: 'production',
  experiments: {
    outputModule: true
  }
};