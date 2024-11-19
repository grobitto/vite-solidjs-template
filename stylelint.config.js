import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: ['@archoleat/stylelint-config-extended-scss'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'declaration-empty-line-before': null,
    'prettier/prettier': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['css-nesting'],
        ignorePartialSupport: true,
      },
    ],
    //'plugin/use-defensive-css': null,
    //'plugin/use-logical-properties-and-values': null,
    'rem-over-px/rem-over-px': null,
    'scss/partial-no-import': null,
    'plugin/stylelint-group-selectors': null,
    'scss/comment-no-loud': null,
  },
});
