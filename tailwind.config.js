import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

module.exports = {
  content: [
    "./public/**/*.html", // Make sure your pages in the public folder are included
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
}
