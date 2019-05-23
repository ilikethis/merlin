const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Module export.
 */
module.exports = {
  entry: {
    'bundle': [
      './src/js/core.js',
      './src/sass/main.scss'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['file-loader']
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: ['url-loader?limit=100000']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          'css-loader?url=false&sourceMap=true&minimize=true',
          'sass-loader?sourceMap=true',
        ]),
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].min.css',
    })
  ],
};
