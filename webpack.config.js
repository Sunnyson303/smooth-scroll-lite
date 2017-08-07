const path = require('path')
var author = require('./package').author
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
  entry: './src/smooth-scroll.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SmoothScroll'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  },
  plugins: [
    new WebpackAutoInject({
      componentsOptions: {
        InjectAsComment: {
          // tag: 'Build version: {version} - {date}' // default
          tag: `
            /**
             * version: {version} 
             * author: ${author}
             * date: {date}
             */
          `
        }
      }
    })
  ],
  devServer: {
    open: true,
    openPage: '',
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'example')
  }
}