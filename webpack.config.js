const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, './app.js')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, './dist'),
    publicPath: ''
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  // externals: {
  // 	react: 'React',
  // 	'react-dom': 'ReactDOM',
  // 	'chart.js': 'Chart'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['app'],
      // hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
    new CleanWebpackPlugin([path.join(__dirname, './dist')]),
    new UglifyjsWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "stage-0", "react"] // env --> es6, stage-0 --> es7
          }
        },
        exclude: /node_modules/
      }, {
        test: /.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    compress: true,
    port: 9000
  }
};
