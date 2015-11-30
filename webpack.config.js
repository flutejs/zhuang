var webpack = require('webpack')

module.exports = {
  entry: {
    index:'./src/add.js'
  },

  module: {
    loaders: [
      { 
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage:0
        }
      }
    ]
  },
  output: {
    path: "./lib",
    filename: '[name].js',
    libraryTarget:'commonjs2',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({beautify:true})
  ]

}