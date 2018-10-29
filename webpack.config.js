const path = require('path');
require("babel-register");

module.exports = {
  entry: './src/index.js',
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'adaguc-webmapjs.js',
    library: "adaguc-webmapjs",
    libraryTarget: "umd" 
  },
  externals:{
    jquery: 'jQuery',
    moment: 'moment',
    proj4:  'proj4'
  },
  module: {
    rules : [
      // JavaScript/JSX Files
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      },
      // CSS Files
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: []
};
module.loaders = [
    { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
  ]

