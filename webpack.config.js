'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');

module.exports = {
  entry: { app: './src/index.ts' },
  debug: true,

  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'egAngularBootstrapUtilities',
  },

  externals: {
    'angular': 'angular',
    'animate.css': 'animate.css',
    'sweetalert2': 'sweetalert2',
    'lodash': 'lodash',
  },

  devtool: 'source-map',

  resolve: { extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'] },

  module: {
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.js,
      loaders.html,
      loaders.css,
    ],
  },
};
