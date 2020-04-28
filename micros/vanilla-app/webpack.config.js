const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve('./index.js'),
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
}
