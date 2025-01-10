const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      name: 'helloWorld',
      type: 'umd',
      export: 'default'
    }
  },
  mode: 'production',
  resolve: {
    extensions: ['.js']
  }
}; 