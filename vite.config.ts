// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'jsdom'
//   }
// })

// import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
// import { defineConfig as defineVitestConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';

// const viteConfig = defineViteConfig({
//   plugins: [react()],
// });

// const vitestConfig = defineVitestConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom'
//   },
// });

// export default mergeConfig(viteConfig, vitestConfig);

/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
});
