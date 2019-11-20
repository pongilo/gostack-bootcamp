
module.exports = {
  env: {
    'es6': true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: 'babel-eslint', // Para entender as ultimas versões do js
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
    ],
    'import/prefer-default-export': 'off' //Permite outros tipos de import
  },
};
