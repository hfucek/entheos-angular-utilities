'use strict';

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.js = [
  {
    test: /\.ts$/,
    loader: 'awesome-typescript-loader',
    exclude: /node_modules/,
  },
];

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = [
  {
    test: /\.scss$/,
    loader: 'style!css!sass',
    exclude: /node_modules/,
  },
];
