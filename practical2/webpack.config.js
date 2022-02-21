const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// eslint-disable-next-line no-undef
module.exports = {
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist')
  },
  // eslint-disable-next-line no-undef
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
