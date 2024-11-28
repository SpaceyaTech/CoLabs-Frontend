import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from "vite-tsconfig-paths";
import analyze from "rollup-plugin-analyzer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeToken: "layout", // <-- Add this line
    }),
    react(),
    tsconfigPaths(),
    analyze({
      // highlight the modules with size > 40kb
      filter(moduleObject) {
        return moduleObject.size > 40000;
      },
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
});
