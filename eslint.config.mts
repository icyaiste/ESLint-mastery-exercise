import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  { "rules": {
        "@typescript-eslint/no-unused-vars": "warn",
        "arrow-body-style": ["error", "always"],
        "prefer-const": "error",
        "semi": ["error", "always"],
        "prefer-template": "error",
        "arrow-spacing": ["error", { before: true, after: true }],
        "space-infix-ops": "error",
        "object-curly-spacing": ["error", "always"],
        "eol-last": ["error", "always"],
        "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
        "@typescript-eslint/no-explicit-any": "error",
        }
      }
]);
