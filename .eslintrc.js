module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ['prettier', 'react-app', 'react-app/jest'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'react/jsx-indent' : ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'indent': ['error', 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { avoidEscape: true }],
  },
};
