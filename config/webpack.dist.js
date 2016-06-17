var babelRegister = require('babel-register')({presets: ['es2015', 'react']});
var Path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LESS_LOADER = ExtractTextPlugin.extract('style', 'css!less');

const NODE_MODULES_DIR = Path.join(__dirname, '../node_modules'),
      PROJECT_DIR = Path.join(__dirname, '..');

var deps = [
  'bluebird/js/browser/bluebird.min.js',
  'immutable/dist/immutable.min.js',
  // 'moment/min/moment.min.js',
];

var config = {
  entry: {
    app: ['./src/index.js'],
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
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("[name].[hash].css"),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [NODE_MODULES_DIR, PROJECT_DIR],
    alias: {
    },
    fallback: [],
  },

  module: {
    noParse: ['react-router', 'redux-router'],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
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
        test: /\.woff(2)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },
      {
        test: /\.eot$/,
        loader: "file"
      },
      {
        test: /\.svg$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory&cacheIdentifier',
        include: Path.join(__dirname, '../src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

deps.forEach(function (dep) {
  var depPath = Path.resolve(NODE_MODULES_DIR, dep);
  config.resolve.alias[dep.split(Path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
