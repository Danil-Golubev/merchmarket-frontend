const path = require('path');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		useJSXTextNode: true,
		project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	root: true,
	plugins: ['@typescript-eslint', 'react', 'prettier', 'import', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				paths: ['./'],
			},
		},
	},
	rules: {
		'prettier/prettier': 'warn',
		'no-await-in-loop': 'warn', // Предупреждает о том, что использование оператора await внутри цикла может привести к замедлению выполнения и может быть проблемой в некоторых случаях
		// Base
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		], // Это правило рекомендует использовать const вместо let или var, когда переменная не переопределяется. Таким образом, оно способствует использованию иммутабельных переменных
		'no-console': 'warn',
		'no-plusplus': 0, //  Это правило не устанавливает ограничений на использование оператора ++ (идет из какого-то пакета)
		'no-param-reassign': 'off', // Позволяет изменять параметры функции
		'padding-line-between-statements': 'off', // Не требует пустых строк между операторами.
		'arrow-body-style': 1, // Это правило рекомендует использовать более краткий синтаксис для стрелочных функций, когда это возможно.
		'@typescript-eslint/no-var-requires': 'off', // Отключает проверку использования require в TypeScript, что может быть полезным в проектах, использующих CommonJS.

		// Импорты
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		], // Проверяет, что импорты файлов с расширениями .js, .jsx, .ts, и .tsx не содержат расширения в самих импортах
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/*.config.js'],
				peerDependencies: true,
			},
		], // Проверяет зависимости, указанные в devDependencies и peerDependencies, чтобы убедиться, что они используются правильно
		'import/prefer-default-export': 'off',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external', 'internal'],
					['parent', 'sibling', 'index', 'object', 'type'],
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before',
					},
					{
						pattern: '[Ss]tyle',
						group: 'type',
						position: 'after',
						patternOptions: {
							matchBase: true,
						},
					},
				],
				pathGroupsExcludedImportTypes: ['react', '*[Ss]tyle'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
			},
		], // Проверяет порядок импортов и их структуру
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
				ignoreCase: true,
			},
		], // Проверяет правильный порядок импортов.

		// React
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				multiline: 'last',
			},
		], // Проверяет, что свойства в JSX элементах отсортированы в соответствии с определенными правилами (колбеки и многострочные пропсы переносяться в конец)
		'react/jsx-uses-react': 'error', // Проверяет, что React используется в JSX
		'react/jsx-uses-vars': 'error', // Проверяет, что переменные, используемые в JSX, действительно объявлены.
		'react/jsx-props-no-spreading': 'off', // Позволяет использовать spread в props
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', 'tsx'],
			},
		], // Проверяет, что файлы с JSX имеют правильное расширение.
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: false,
				assignment: false,
			},
		], // Проверяет, что многострочные JSX элементы правильно обернуты.
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
				unnamedComponents: 'function-expression',
			},
		], //  Определяет, какие виды компонентов следует считать "именованными" и "безымянными"
		'react/prop-types': 'off', // Отключает использование PropTypes в React компонентах
		'react/require-default-props': 'off', // Отключает проверку наличия default props в React компонентах
		'react/jsx-pascal-case': 'off', // Отключает проверку наименования компонентов с использованием PascalCase
		'react/react-in-jsx-scope': 'off', // Отключает проверку наличия React в области видимости в JSX

		// React hooks
		'react-hooks/rules-of-hooks': 'error', // Проверяет правила использования React Hooks.
		'react-hooks/exhaustive-deps': ['warn'], // Предупреждает о неправильном использовании зависимостей в React Hooks.
	},
	overrides: [
		// typescript
		{
			files: ['*.{ts,tsx}'],
			extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 0, // Выключает требование явного указания типов входных параметров и возвращаемых типов функций в TypeScript
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': ['error'],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						vars: 'all',
						args: 'after-used',
						ignoreRestSiblings: true,
						caughtErrors: 'none',
						argsIgnorePattern: '^(_|doc$|req$|res$|next$|props$|params$|opts$|e$)',
					},
				], // Определяет, какие переменные считать неиспользуемыми в TypeScript файлах и какие исключения делать.
				'@typescript-eslint/switch-exhaustiveness-check': 'error', // Проверяет, что оператор switch полностью покрывает все возможные варианты.
			},
		},
	],
};
