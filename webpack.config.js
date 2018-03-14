const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// loader rules, plugins, resolve options
module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(['dist']) 
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') // path.resolve(from[, to])将参数to解析到绝对路径里
  },
  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: [
  //       'style-loader',
  //       'css-loader'
  //     ]
  //   }, {
  //     test: /\.(png|svg|jpg|gif)$/,
  //     use: [
  //       'file-loader'
  //     ]
  //   }, {
  //     test: /\.html$/,
  //     use: [
  //       'html-loader'
  //     ]
  //   }]
  // }
}