module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["babel-polyfill", "babel-polyfill/dist/polyfill.min.js"],
          ["helper", "./utils/helper"],
          ["material-ui/DatePicker", "../custom/DatePicker"],
          ["material-ui", "material-ui-ie10"],
          ["@components", "./src/components"],
          ["@api", "./src/api"],
          ["@type", "./src/types"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
};
