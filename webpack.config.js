const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const basePath = "";

module.exports = {
	module: {
		rules: [
			{test: /\.js$/i, exclude: /node_modules/, loader: 'babel-loader', options: {presets: ['@babel/preset-env']}},
			{test: /\.css$/i, use: [{loader: MiniCssExtractPlugin.loader},'css-loader', 'style-loader']},
			{test: /\.html$/i, use: 'html-loader'},
			{test: /\.(png|svg|jpg|jpeg|gif)$/i, use: {loader:'file-loader',options:{name:'imgs/[name].[ext]',publicPath:basePath}}}
		]
	},
	entry: {
		main: './src/main.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: basePath
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			chunks: ['main'],
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({}),
			new OptimizeCssAssetsPlugin({})
		],
	},
};