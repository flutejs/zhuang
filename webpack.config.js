var webpack = require('webpack')
var fs = require('fs')

module.exports = {
  entry: {
    index: './src/add.js'
  },

  externals:fs.readdirSync("node_modules"),

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 0
        }
      }
    ]
  },
  output: {
    path: "./lib",
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({beautify: true})
  ]

}