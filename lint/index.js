module.exports = {
  extends: ['./base.js', './vue.js', './prettier.js'],
  parserOptions: {
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    module:
      'ESNext' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
    },
  ],
  plugins: [],
  rules: {},
}
