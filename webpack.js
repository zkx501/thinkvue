/**
 * Created by mr.yang on 2017/7/12.
 */
let webpack = require('webpack');
let path = require('path');

const options = {
	// 配置入口文件
	entry: path.resolve(__dirname, 'Resource/entry.js'),
	// 配置编译输出文件
	output: {
		path: path.resolve(__dirname, 'Public/asset/build/js'),
		publicPath: '/Public/asset/build/js/',
		filename: '[name].js'
	},
	// 配置依赖
	module: {
		// 解析器
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
			{ 
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, 
				loader: 'file-loader', 
				query: { name: '[name].[ext]?[hash]'} 
			}
		]
	}
};
module.exports = options;