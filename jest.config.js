const test = require( '@wordpress/jest-preset-default/jest-preset.json' )
const { omit } = require( 'lodash' )

module.exports = {

	// Remove deprecated: Option 'setupTestFrameworkScriptFile' was replaced by configuration 'setupFilesAfterEnv', which supports multiple paths.
	...omit( test, 'setupTestFrameworkScriptFile' ),

	// Override the setup with some of our own stuff.
	setupFilesAfterEnv: [
		'<rootDir>/src/test/setup-test-framework.js',
	],

	// Custom mappers.
	moduleNameMapper: {
		'^@stackable(.*)$': '<rootDir>/src$1',
		'.s?css$': '<rootDir>/src/test/scss-stub.js',
		'.(png|jpg|gif)$': '<rootDir>/src/test/image-stub.js',
		'.svg$': '<rootDir>/src/test/svgr-mock.js',
		stackable: '<rootDir>/src/test/stackable-mock.js',
	},

	// Ignore Unexpected identifiers in node_modules/simple-html-tokenizer/dist/es6/tokenizer.js
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!simple-html-tokenizer)',
	],
}
