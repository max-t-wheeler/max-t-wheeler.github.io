const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = path.join(__dirname, "./dist/");


module.exports = {
  entry: './static/js/app.js',
  output: {
    filename: "app-[hash].js",
    path: OUTPUT_PATH
  },
  devtool: 'source-map',
  devServer: {
    contentBase: OUTPUT_PATH,
    port: 9000
  },
  module: {
    rules:[
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  resolve: { extensions: [".js"] },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html'
    })
  ]
};