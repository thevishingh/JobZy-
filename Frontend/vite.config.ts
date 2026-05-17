import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reduxVendor: ["react-redux", "@reduxjs/toolkit"],
          routerVendor: ["react-router-dom"],
          uiVendor: ["lucide-react", "framer-motion"],
        },
      },
    },
  },
})
