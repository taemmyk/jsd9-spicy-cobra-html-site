import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about-spicy-cobra.html"),
        game_detail: resolve(__dirname, "game_detail.html"),
        game_categories: resolve(__dirname, "game_categories.html"),
        order: resolve(__dirname, "order.html"),
        checkout: resolve(__dirname, "checkout.html"),
        devlogs: resolve(__dirname, "devlogs.html"),
      },
    },
  },
});
