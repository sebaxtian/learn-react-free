const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.gitpod.io'],
    contentBase: './dist'
  }
};

module.exports = merge(common, config);
