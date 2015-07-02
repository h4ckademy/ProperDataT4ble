var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/jsx/propertable.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'propertable.js'
  },

  module: {
    loaders: [
      {
        test: /test\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
