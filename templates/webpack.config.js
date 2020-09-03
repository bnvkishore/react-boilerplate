module.exports = `

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: "[name].[chunkhash:4].js",
    filename: "[name].[chunkhash:4].js",
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /.(js)$/, use: 'babel-loader' },
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /.(csv|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
			},
			// {
			// 	test: /.eot(?v=d+.d+.d+)?$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: 'fonts/[name].[ext]'
			// 			}
			// 		}
			// 	],
			// },
			// {
			// 	test: /.[ot]tf(?v=d+.d+.d+)?$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: 8192,
			// 				mimetype: 'application/octet-stream',
			// 				name: 'fonts/[name].[ext]',
			// 			}
			// 		}
			// 	],
			// },
			{
        test: /.s[ac]ss$/i,
        use: [
          // Creates style nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
        
      ]
    )
  ]
};

`

