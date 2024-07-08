import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/arthro/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
});

// export default defineConfig({
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
// });
