import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    languageOptions: { globals: globals.browser },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        modules: true,
        experimentalObjectRestSpread: true,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
