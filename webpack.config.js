const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
   path: path.resolve(__dirname, 'lib'),
   filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.jsx', filename: 'index.html'}),
  ],
  devServer: {
    contentBase: './src/',
    hot: true,
    publicPath: '/lib'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, './src/styles'),
        use: ['iso-morphic-style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['react', 'flow']},
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  }
};
