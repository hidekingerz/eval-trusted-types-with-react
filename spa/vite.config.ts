import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `--base` and `--outDir` are passed on the command line by proxy/Dockerfile
// (one build per React version, e.g. `--base=/19.3/ --outDir=dist/19.3`).
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    sourcemap: false,
  },
  server: {
    // `npm run dev` convenience: talk to a locally running backend.
    proxy: { '/api': 'http://localhost:8080' },
  },
});
