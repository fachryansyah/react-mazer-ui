import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import * as packageJson from "./package.json";

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    build: {
      lib: {
        entry: resolve("src", "components/index.jsx"),
        name: "ReactMazerUI",
        formats: ["es", "umd"],
        fileName: (format) => `react-mazer-ui.${format}.js`,
      },
      rollupOptions: {
        external: [...Object.keys(packageJson.peerDependencies)],
      },
    },
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        {
          find: /^~(.*)$/,
          replacement: "$1",
        },
      ],
    },
  });
};
