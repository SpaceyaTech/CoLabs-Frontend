import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({
    routeToken: "layout" // <-- Add this line
  }), react(), tsconfigPaths()],
  server: {
    port: 3000,
    host: true,
  },
});
