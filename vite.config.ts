// /// <reference types="vitest" />
// import { defineConfig } from 'vite';

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTest.ts',
//   },
// });

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { jest } from '@jest/globals';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
});
