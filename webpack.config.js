const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    //library: 'panolens',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ]
  }
}