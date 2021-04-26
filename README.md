# Setup dự án typescript với airbnb setting

## 1. cài đặt package

```shell
yarn add -D eslint prettier
```

```shell
npx install-peerdeps --dev eslint-config-airbnb
```

```shell
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

dùng typescript thì cài thêm

```shell
yarn add --dev typescript @types/react @types/node
```

## 2. cài đặt file setting

tạo file .eslintrc.js

```js
module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'error', // turn on errors for missing imports
    'react/jsx-filename-extension': [0, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [
      0,
      { html: 'ignore', custom: 'ignore', explicitSpread: 'ignore' },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
};
```

tạo file tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json", // jsconfig.json
  "include": [
    "src/**/*.ts",
    "src/**/*.js",
    "test/**/*.ts",
    ".eslintrc.js",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

tạo file .prettierrc.js

```js
module.exports = {
  // Change your rules accordingly to your coding style preferences.
  // https://prettier.io/docs/en/options.html
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
};
```

Sau khi cài xong Eslint và Prettier bạn cần phải thêm một đoạn "lint:es": "eslint . --ext ts,tsx,js", vào "scripts" trong package.json

```json
{
  "scripts": {
    "lint:es": "eslint . --ext ts,tsx,js"
  }
}
```

Cuối cùng là tạo file cấu hình cho vsCode tsconfig.json cùng cấp với tsconfig.eslint.json ( trong file này có link vào file jsconfig/ tsconfig), theo kinh nghiệm thì cứ dùng cả 2 file jsconfig rồi chạy lệnh `tsc -p jsconfig.json` thì ts server nó sẽ tự đọc luôn cấu hình jsconfig ( cài tsc cli mới chạy dc nhé)

\*\*Lưu ý là 2 file này vừa là cấu hình vừa để VScode autocomplete code khi gõ nên tốt nhất nếu dự án dùng cả js và ts thì để 2 file luôn.
