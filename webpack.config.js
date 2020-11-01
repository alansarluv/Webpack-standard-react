const path = require('path');
module.exports = {
  // where do we want webpack to start looking to our files
  entry: [
    './src/index.js'
  ],
  // bundling everything and save in output here
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // what we wana run when working in local environment
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader']  
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['eslint-loader']  
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}