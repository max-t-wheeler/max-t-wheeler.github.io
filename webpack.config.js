const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = path.join(__dirname, "./dist/");

module.exports = {
	entry: "./static/js/app.js",
	output: {
		path: OUTPUT_PATH,
		filename: "app-[hash].js"
	},
	devtool: 'source-map',
	devServer: {
		contentBase: OUTPUT_PATH,
		port: 9000
	},
	module: {
		rules: [
			{
				test:/\.css$/,
				use:['style-loader', 'css-loader']
			},
			{
				test:/\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				query:{
					presets: ['env']
				}
			}
		]
	},
	resolve: {
		extensions: [".js"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: "./build-index.html"
		})
	]
}