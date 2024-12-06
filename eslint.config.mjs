import tseslint from "typescript-eslint";

export default tseslint.config({
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  rules: {
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        objectLiteralTypeAssertions: "never",
      },
    ],
  },
});
