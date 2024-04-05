import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        page: "fuck.html",
        nested: "./music/music.mp3",
      },
    },
  },
});
