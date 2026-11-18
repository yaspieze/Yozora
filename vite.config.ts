import { defineConfig } from 'vite';
import { readdirSync, statSync } from 'node:fs';
import { resolve, relative } from 'node:path';

/** collect every *.html entry (flat + nested folders) */
function htmlInputs(dir: string, out: Record<string, string> = {}, base = dir): Record<string, string> {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === 'public' || name === 'src' || name.startsWith('.')) continue;
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) htmlInputs(full, out, base);
    else if (name.endsWith('.html')) {
      const key = relative(base, full).replace(/\.html$/, '').replace(/\/index$/, '') || 'root';
      out[key] = full;
    }
  }
  return out;
}

export default defineConfig({
  base: '/kiniwa/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs(__dirname),
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
