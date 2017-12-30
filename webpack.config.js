
var path=require('path');
var webpack=require("webpack");
var ExtractTextPlugin=require('extract-text-webpack-plugin')

var HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports={
	entry:[
			'webpack/hot/only-dev-server',
			'webpack-dev-server/client?http://localhost:3006',
			'react-hot-loader/patch',
			path.join(__dirname,"app/index.js"),
	    ],
	output:{
			path: path.join(__dirname,"/dist/"),
			filename:"bundle.js",
			publicPath:"/"
		},
	module:{

		loaders:[
		{
			test:/\.jsx?$/,
			exclude:path.join(__dirname,"/node_modules/"),
			loader:"babel-loader",
			query:
			{
				presets:['es2015','react']
			}
		},
		{
			test:/\.css$/,
			exclude:path.join(__dirname,"/src/"),
			loader:['style-loader','css-loader'],
		},
		{
			test:/\.jsx?$/,
			loader:'eslint-loader',
			include:path.join(__dirname,"/app/"),
			enforce:'pre'
		},
		// {
		// 	test:'/\.(ttf|eot|woff|woff2|svg)$/',
		// 	use:{
		// 			loader:"file-loader",
		// 		}
		// },
		{
			test:require.resolve('jquery'),
			use:[{
					loader:'expose-loader',
					options:'jQuery',
				},
				{
					loader:'expose-loader',
					options:'$',
				},
				{
					loader:'expose-loader',
					options:'window.jQuery',
				},
				{
					loader:'expose-loader',
					options:'jquery',
				},
			]
		},
		// {
		// 	test:/\.css$/,
		// 	loader:ExtractTextPlugin.extract({
		// 		fallback:'style-loader',
		// 		use:'css-loader'
		// 	})
		// },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
		{ test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
		{ test: /\.(png|jpg)$/, loader: "file-loader" },
	],
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.tpl.html',
			inject:"body",
			filename:"index.html",
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify('development')
		}),
		new ExtractTextPlugin('[name].css')
	]
	
}
