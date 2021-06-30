const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {loader: 'image-webpack-loader'} //["file-loader"]
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    compress: true,
    port: 8564
  },
  devtool: 'inline-source-map'
}
