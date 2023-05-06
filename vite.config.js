/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  console.log("esta cargando desde vite");
  if (command === 'build') {
    return {
      root: 'src',
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './public',
          },
        },
      },
    };
  }
  return {};
});
