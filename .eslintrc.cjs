/* eslint-env node */

module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended", 
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { 
        ecmaVersion: "latest", 
        sourceType: "module",
        project: "./tsconfig.json" // Add this line
    },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "error",
    },
};
