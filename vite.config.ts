/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      exclude: [
        '**/src/components/svg/**',
        '**/src/types/**',
        '**/src/main.tsx',
        '**/src/vite-env.d.ts',
        '**/src/constants/**',
      ],
    },
  },
});
