var path = require('path');

module.exports = {
  entry: "./client/index.jsx",
  output: {
      path: "./public",
      filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.css',
    ],
  }
};
