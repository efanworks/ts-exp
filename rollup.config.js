import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    resolve({ extensions: [".js", ".ts"] }),
    babel({ extensions: [".js", ".ts"], babelHelpers: "bundled" }),
  ],
};
