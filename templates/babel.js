module.exports = `
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	],
	"plugins": [
		"@babel/plugin-proposal-class-properties",
		[
			"@babel/plugin-transform-runtime",
			{
				"regenerator": true
			}
		],
		[
			"transform-remove-console",
			{
				"exclude": [
					"error",
					"warn"
				]
			}
		]
	]
}
`