module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol', 'prettier'],
  env: {
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
};
