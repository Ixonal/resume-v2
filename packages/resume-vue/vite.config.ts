import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  //this enables locating the index.html entry point in the src directory
  root: "src", 
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)), 
      "@components": fileURLToPath(new URL('./src/components', import.meta.url))
    }
  },
  server: {
    open: true
  },
  plugins: [
    vue()
  ], 
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern", 
        silenceDeprecations: [ "mixed-decls" ]
      }
    }
  }
});
