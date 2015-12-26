import Path from 'path';
import webpack from 'webpack';

console.log('__dirname:', __dirname)

const NODE_MODULES_DIR = Path.join(__dirname, '../node_modules'),
      PROJECT_DIR = Path.join(__dirname, '..');


var config = {
  devtool: 'source-map',
  entry: {
    app: ['./src/index.js'],
  },

  output: {
    path: __dirname + './dev/',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },

  cache: false,

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8888,
    contentBase: './src',
    colors: true,
  },

  module: {
    noParse: ['react-router', 'redux-router'],

    loaders: [{
      test: /\.css$/,
      include: [
        Path.resolve("./node_modules/react-select"),
        Path.resolve("./node_modules/react-datepicker"),
        Path.resolve("./node_modules/bootstrap"),
        Path.resolve("./src/react-select.css"),
        Path.resolve("./node_modules/react-widgets"),
      ],
      loader: "style!css"
    },
    {
      test: /\.css$/,
      exclude: [/react-/, /bootstrap/, /formsy-react/],
      loader: 'style!css?modules&localIdentName=[name]-[local]__[hash:base64:5]!postcss'
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      test: /\.woff2?$/,
      loader: 'url?limit=100000&minetype=application/font-woff'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000&minetype=application/font-woff'
    }, {
      test: /\.woff\?.*$/,
      loader: 'url?limit=100000&minetype=application/font-woff'
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=100000&minetype=application/octet-stream'
    }, {
      test: /\.ttf\?.*$/,
      loader: 'url?limit=100000&minetype=application/octet-stream'
    }, {
      test: /\.eot$/,
      loader: 'file'
    }, {
      test: /\.eot\?.*$/,
      loader: 'file'
    }, {
      test: /\.svg$/,
      loader: 'url?limit=100000&minetype=image/svg+xml'
    }, {
      test: /\.svg\?.*$/,
      loader: 'url?limit=100000&minetype=image/svg+xml'
    }, {
      test: /\.gif$/,
      loader: 'url?limit=100000&mimetype=image/gif'
    }, {
      test: /\.jpg$/,
      loader: 'url?limit=100000&mimetype=image/jpg'
    }, {
      test: /\.png$/,
      loader: 'url?limit=100000&mimetype=image/png'
    }, {
      test: /\.jsx?$/,
      loader: 'react-hot!babel?cacheDirectory&cacheIdentifier',
      include: Path.join(__dirname, '../src')
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],

    root: [NODE_MODULES_DIR, PROJECT_DIR],

    alias: {
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    })
  ],

  postcss: [
    require('autoprefixer-core'),
    require("postcss-custom-properties")
  ],

};

[
  'bluebird/js/browser/bluebird.min.js',
  'immutable/dist/immutable.min.js',
].forEach(lib => {
  const libPath = Path.resolve(NODE_MODULES_DIR, lib);

  config.module.noParse.push(libPath);
  config.resolve.alias[lib.split('/')[0]] = libPath;
});

export default config;
