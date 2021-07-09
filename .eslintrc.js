module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['alloy', 'alloy/typescript'],
	rules: {
		'@typescript-eslint/no-inferrable-types': 'off'
	}
}
