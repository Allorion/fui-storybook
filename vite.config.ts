import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@static': path.resolve(__dirname, 'src/static'),
      '@style': path.resolve(__dirname, 'src/static/styles'),
      '@fonts': path.resolve(__dirname, 'src/static/fonts'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@dop-function': path.resolve(__dirname, 'src/dop-function'),
      '@material': path.resolve(__dirname, 'src/material/'),
    },
  },
});
