'use strict';

const wallabyWebpack = require('wallaby-webpack');

const webpackPostprocessor = wallabyWebpack({});

module.exports = () => {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.test.*s', ignore: true },
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false },
    ],

    tests: [
      { pattern: 'src/**/*.test.ts', load: false },
    ],

    postprocessor: webpackPostprocessor,

    bootstrap: () => {
      window.__moduleBundler.loadTests();
    },
  };
};
