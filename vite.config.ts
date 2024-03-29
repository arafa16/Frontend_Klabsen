import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:4000,
    host:true
  },
  build: {
    commonjsOptions: {
      include: ["tailwind.config.js", "node_modules/**"],
    },
  },
  optimizeDeps: {
    include: ["tailwind-config"],
  },
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
    },
  },
});
