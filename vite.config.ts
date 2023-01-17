import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint --ext ts,tsx src' },
      enableBuild: true,
    }),
    svgrPlugin({ svgrOptions: { icon: true } }),
    preact(),
  ],
});
