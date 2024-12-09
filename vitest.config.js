import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "./tests/vitest.setup.js",
  },
});
