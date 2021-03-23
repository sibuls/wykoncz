const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var server = new WebpackDevServer(compiler, { historyApiFallback: true });

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'build'),
    publicPath: '/',
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 3030,

    // hot: true,
    // host: 'localhost',

    compress: true,

    https: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|bmp|img|svg|gif|jpeg)$/,
        use: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '2.0.0' }],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'nowa aplikacja',
      template: 'src/templates/template.html',
    }),
  ],
};
