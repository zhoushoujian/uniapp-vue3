module.exports = {
  extends: ['./lint/index'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    parser: '@typescript-eslint/parser',
    createDefaultProgram: true,
    extraFileExtensions: ['.vue'],
  },
  globals: {
    NodeJS: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    uni: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
  },
}
