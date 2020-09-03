const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  }
};

// collects all JS from entry (collected into index.js)
// traverses tree of code within entry file
// bundles everything into single JS file
// processes information with rules