const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home'
  },
  watch: NODE_ENV === 'development',
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map': null,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
          presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}