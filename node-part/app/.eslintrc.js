module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'parser': 'babel-eslint',
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'no-console': ['error', { allow: ['log', 'error'] }],
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
