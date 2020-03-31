module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  rules: {
    "react/prop-types": ["warn"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "indent": ["error", 4],
    "react/forbid-prop-types": ["off"],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-indent": ["error", 4],
  },
  ignorePatterns: ['src/serviceWorker.js']
};
