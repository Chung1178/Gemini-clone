module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // 將 prettier 規則整合進來
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // 啟用 prettier 插件
  rules: {
    'prettier/prettier': 'error', // 將 prettier 的問題視為一個 ESLint 錯誤
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}