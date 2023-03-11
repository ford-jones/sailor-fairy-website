const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'src', 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV
          ),
        'process.env.LOCAL_PORT': JSON.stringify(
          process.env.LOCAL_PORT
          ),
        'process.env.SERVICE_ID': JSON.stringify(
          process.env.SERVICE_ID
        ),
        'process.env.TEMPLATE_ID': JSON.stringify(
          process.env.TEMPLATE_ID
        ),
        'process.env.EMAILJS_API_KEY': JSON.stringify(
          process.env.EMAILJS_API_KEY
        ),
        'process.env.MONGODB_USERNAME': JSON.stringify(
          process.env.MONGODB_USERNAME
        ),
        'process.env.MONGODB_PW': JSON.stringify(
          process.env.MONGODB_PW
        ),
        'process.env.FLASH_DB': JSON.stringify(
          process.env.MONGODB_FLASH_DB
        ),
        'process.env.FLASH_CLN': JSON.stringify(
          process.env.MONGODB_FLASH_CLN
        ),
        'process.env.TATTOO_DB': JSON.stringify(
          process.env.MONGODB_TATTOO_DB
        ),
        'process.env.TATTOO_CLN': JSON.stringify(
          process.env.MONGODB_TATTOO_CLN
        ),
    })
  ],
}