import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'; // ✅ ADD THIS

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // ✅ ADD THIS (TOP)
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('@react-three') || id.includes('/three/') || id.includes('\\three\\')) {
            return 'vendor-three';
          }
          if (
            id.includes('/react/') ||
            id.includes('\\react\\') ||
            id.includes('/react-dom/') ||
            id.includes('\\react-dom\\') ||
            id.includes('framer-motion') ||
            id.includes('lucide-react') ||
            id.includes('@radix-ui') ||
            id.includes('react-day-picker') ||
            id.includes('react-hook-form') ||
            id.includes('react-resizable-panels') ||
            id.includes('recharts')
          ) {
            return 'vendor-react';
          }
          return undefined;
        },
      },
    },
  },
});