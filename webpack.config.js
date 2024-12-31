const path = require('path');

module.exports = {
	entry: './theme.css', // Adjust the entry point as needed
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/, // Adjust loaders as needed
				use: ['style-loader', 'css-loader'],
			},
			// Add more loaders as required
		],
	},
	// Add plugins and other configurations as needed
};
