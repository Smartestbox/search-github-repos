import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node_modules", "dist", "build"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"],
      },
    },
  },
  {
    files: ["**/*.{ts, tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "react/tsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        {allowConstantExport: true},
      ],
    },
  },
);
