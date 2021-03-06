const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
  module: {
      rules: [
          {test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: 'babel-loader'
         },
          {test: /\.css$/,
          use: ['style-loader', 'css-loader']
         },
         {test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html'
    })]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
