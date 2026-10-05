const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const reactNative = require('eslint-plugin-react-native');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
	expoConfig,
	prettierRecommended,
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			'react-native': reactNative,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'react-native/no-unused-styles': 'error',
			'react-native/split-platform-components': 'error',
			'react-native/no-inline-styles': 'error',
			'react-native/no-color-literals': 'error',
			'react-native/no-raw-text': 'error',
			'react-native/no-single-element-style-arrays': 'error',
			'react-hooks/exhaustive-deps': 'off',
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					useTabs: true,
					semi: true,
					trailingComma: 'all',
					bracketSpacing: true,
					printWidth: 100,
					endOfLine: 'auto',
				},
			],
		},
	},
	globalIgnores(['dist/*']),
]);
