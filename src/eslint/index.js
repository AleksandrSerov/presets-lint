module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',

		'plugin:react/jsx-runtime',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',

		'plugin:@typescript-eslint/recommended',

		'plugin:import/recommended',

		'prettier',

		'plugin:jest/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json', './cypress/tsconfig.json'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
		'unicorn',
		'@sserov/dirnames',
		'jest',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		},
	},
	rules: {
		// Typescript
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/array-type': ['error', { default: 'generic' }],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/prefer-nullish-coalescing': ['error'],
		'@typescript-eslint/switch-exhaustiveness-check': ['error'],

		// React
		'react/jsx-closing-bracket-location': ['error'],
		'react/jsx-curly-brace-presence': ['error', 'never'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-curly-spacing': ['error', 'always'],
		'react/jsx-fragments': ['error', 'element'],
		'react/prop-types': 'off',
		'react/jsx-no-useless-fragment': ['error'],
		'react/jsx-boolean-value': ['error', 'always'],
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],
		'react/self-closing-comp': ['error'],
		'react/no-array-index-key': ['error'],
		'react/no-multi-comp': ['error'],

		// imports, file extensions
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.{stories,test,tests,spec}.{js,jsx,ts,tsx}'] },
		],
		'import/no-useless-path-segments': [
			'error',
			{
				noUselessIndex: true,
			},
		],
		'import/no-unresolved': ['error'],
		'import/extensions': ['error'],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Node.js builtins. You could also generate this regex if you use a `.js` config.
					// For example: `^(${require("module").builtinModules.join("|")})(/|$)`
					[
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
					],
					// Packages. `react` related packages come first.
					['^react', '^@?\\w'],
					// Internal packages.
					['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$'],
				],
			},
		],
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase',
			},
		],
		'@sserov/dirnames/match-kebab-case': ['error'],

		// Eslint
		'arrow-body-style': ['error', 'as-needed'],
		curly: ['error', 'all'],
		eqeqeq: ['error'],
		'func-style': ['error', 'expression'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-unneeded-ternary': ['error'],
		'arrow-spacing': ['error'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'semi-spacing': ['error'],
		'semi-style': ['error'],
		'space-before-blocks': ['error'],
		'no-extra-semi': ['error'],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': ['error'],
		'space-in-parens': ['error'],
		'switch-colon-spacing': ['error'],
		'computed-property-spacing': ['error'],
		'func-call-spacing': ['error'],
		'key-spacing': ['error'],
		'no-trailing-spaces': ['error'],
		'no-shadow': ['warn'],
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		'object-shorthand': ['error', 'always'],
		'quote-props': ['error', 'as-needed'],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'MemberExpression[object.name=\'React\']',
				message: 'Don\'t call things from React with dot notaion. Import module itself',
			},
		],

		// Code smells
		complexity: ['warn', 20],
	},
};
