module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './src/components/'],
          ['@/images', './src/images/'],
          ['@/utils', './src/utils/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
