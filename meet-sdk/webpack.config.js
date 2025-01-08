const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'helloWorld'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js']
  }
}; 