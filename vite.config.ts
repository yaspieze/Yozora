import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const htmlEntries = Object.fromEntries(
  readdirSync(__dirname)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), resolve(__dirname, f)]),
);

export default defineConfig({
  base: '/kiniwa/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlEntries,
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (info) => {
          const n = info.name ?? '';
          if (/\.(woff2?|ttf|otf)$/i.test(n)) return 'assets/fonts/[name]-[hash][extname]';
          if (/\.(png|jpe?g|svg|webp|avif|gif)$/i.test(n)) return 'assets/img/[name]-[hash][extname]';
          return 'assets/css/[name]-[hash][extname]';
        },
      },
    },
  },
  server: { host: '0.0.0.0', port: 5173, allowedHosts: true },
  preview: { host: '0.0.0.0', port: 4173, allowedHosts: true },
});
