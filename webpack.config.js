const path = require('path');

module.exports = {
  entry: './src/code.ts', // or all *.ts in all folders
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    watchOptions:{
        poll: true
    }
  }
};