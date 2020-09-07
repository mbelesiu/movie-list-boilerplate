const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    './dist/app': path.resolve(__dirname, 'client', 'src', 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './')

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
};