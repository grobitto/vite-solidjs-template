import eslint from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/typescript';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

const base = tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended);

export default [
  ...base,
  solid,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    ...prettier,
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
