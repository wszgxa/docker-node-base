module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'no-console': ['error', { allow: ['log', 'error'] }],
    'react/jsx-uses-vars': 1,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'no-unused-vars': ['error', {'args': 'none'}],
    'semi': [
      'error',
      'never'
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
