var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AppCachePlugin = require('appcache-webpack-plugin');
var LESS_LOADER = ExtractTextPlugin.extract('style', 'css!less');

var node_modules_dir = path.join(__dirname, '../node_modules');
var PROJECT_DIR = path.join(__dirname, '..');

var deps = [
  'bluebird/js/browser/bluebird.min.js',
  'immutable/dist/immutable.min.js',
  // 'moment/min/moment.min.js',
];

var config = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'bluebird', 'immutable', 'moment'],
  },

  output: {
    filename: 'app.[hash].js',
    path: './dist/',
  },

  cache: false,
  debug: false,
  devtool: false,
  noInfo: true,

  stats: {
    colors: true,
    reasons: false,
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `'${process.env.NODE_ENV}'`
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("[name].[hash].css"),
    new HtmlWebpackPlugin({
      //favicon: 'src/assets/favicon.ico',
      filename: 'index.html',
      template: 'src/index.html',
      title: '',
    }),
    new AppCachePlugin({
      settings: ['prefer-online'],
      output: 'manifest.appcache',
    }),
  ],

  postcss: [
    require('autoprefixer'),
    require('postcss-nested'),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
    },
    root: [node_modules_dir, PROJECT_DIR],
  },

  module: {
    noParse: [],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules|assets/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&sourceMap', 'postcss'),
      },
      {
        test: /\.css$/,
        include: /node_modules|assets/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.less$/,
        loader: LESS_LOADER,
      },
      {
        test: /\.gif/,
        loader: 'url?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg/,
        loader: 'url?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png/,
        loader: 'url?limit=10000&mimetype=image/png'
      },
      {
        test: /\.woff(2)?/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.ttf/,
        loader: 'url?limit=10000&minetype=application/octet-stream',
      },
      {
        test: /\.eot/,
        loader: 'file',
      },
      {
        test: /\.svg/,
        loader: 'url?limit=10000&minetype=image/svg+xml',
      },
      {
        test: /\.gif/,
        loader: 'url?limit=100000&mimetype=image/gif'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, '../src'),
      },
    ]
  }
};

module.exports = config;
