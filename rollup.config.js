import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].mjs",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].cjs",
    },
  ],
  plugins: [
    resolve({ extensions: [".js", ".ts"] }),
    babel({
      extensions: [".js", ".ts"],
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      babelHelpers: "bundled",
    }),
  ],
};
