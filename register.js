require('babel-register')({presets: ['es2015', 'react']});

module.exports = require(({
  'webpack-dev-server': './config/webpack.config.babel.js'
})[process.argv[1].split('/').pop()]);
