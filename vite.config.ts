import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
});
