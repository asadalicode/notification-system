module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','@typescript-eslint'],
  rules: {
    "react/react-in-jsx-scope": "off",  // For React 17+
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
