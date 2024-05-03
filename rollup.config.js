import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "cesium.js",
  output: {
    dir: "docs",
    format: "es",
  },
  plugins: [commonjs(), nodeResolve()],
};
