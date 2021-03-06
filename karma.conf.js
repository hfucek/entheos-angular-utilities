'use strict';

process.env.TEST = true;

const loaders = require('./webpack/loaders');

module.exports = (config) => {
  const coverage = config.singleRun ? ['coverage'] : [];

  config.set({
    frameworks: [
      'chai',
      'mocha',
      'sinon',
    ],

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-istanbul',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
    ],

    files: [
      './src/tests.entry.ts',
      {
        pattern: '**/*.map',
        served: true,
        included: false,
        watched: true,
      },
    ],

    preprocessors: {
      './src/tests.entry.ts': [
        'webpack',
        'sourcemap',
      ],
      './src/**/!(*.test|tests.*).(ts|js)': [
        'sourcemap',
      ],
    },

    webpack: {
      entry: './src/tests.entry.ts',
      devtool: 'inline-source-map',
      verbose: false,
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
      },
      module: {
        loaders: combinedLoaders(),
        postLoaders: config.singleRun
          ? [ loaders.istanbulInstrumenter ]
          : [ ],
      },
      stats: { colors: true, reasons: true },
      debug: false,
    },

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    reporters: ['mocha']
      .concat(coverage),
      // .concat(coverage.length > 0 ? ['karma-remap-istanbul'] : []),

    // remapIstanbulReporter: {
    //   src: 'coverage/chrome/coverage-final.json',
    //   reports: {
    //     html: 'coverage',
    //   },
    // },

    coverageReporter: {
      reporters: [
        { type: 'json' },
      ],
      dir: './coverage/',
      subdir: (browser) => {
        return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'
      },
    },

    port: 9796,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
  });
};

function combinedLoaders() {
  return Object.keys(loaders).reduce(function reduce(aggregate, k) {
    switch (k) {
    case 'istanbulInstrumenter':
    case 'tslint':
      return aggregate;
    case 'ts':
    case 'tsTest':
      return aggregate.concat([ // force inline source maps
        Object.assign(loaders[k],
          { query: { babelOptions: { sourceMaps: 'both' } } })]);
    default:
      return aggregate.concat([loaders[k]]);
    }
  },
  []);
}
