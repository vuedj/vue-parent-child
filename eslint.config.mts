import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

export default [
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            'no-undef': 'off',
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
            },
        },
        rules: {
            'no-undef': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['error', 2],
            'vue/script-indent': ['error', 2, { baseIndent: 1 }],
        },
    },
    prettier,
    {
        rules: {},
    },
]
