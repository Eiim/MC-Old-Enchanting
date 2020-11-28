const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {test: /\.css$/, use: ['css-loader', 'style-loader']},
      {test: /\.html$/, use: 'html-loader'},
	  {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ]
  },
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
	minimize: true,
	minimizer: [
	  new TerserPlugin({
		extractComments: false,
	  }),
	  new OptimizeCssAssetsPlugin(),
	],
  },
};