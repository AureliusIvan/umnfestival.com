module.exports = {
  parser: '@babel/eslint-parser', // Use babel-eslint parser for JSX, etc.
  parserOptions: {
    ecmaVersion: 2020, // Support latest ECMAScript features
    sourceType: 'module', // Enable module system (import/export)
  },
  env: {
    es6: true, // Enable ECMAScript 6 features
    browser: true, // Browser global variables
    node: true, // Node.js global variables
  },
  rules: {
    // Your custom rules or existing ones
  },
};
