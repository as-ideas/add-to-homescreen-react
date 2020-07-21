const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  const outputFolder = Path.join(__dirname, './dist');

  return {
    entry: ['./live-demo/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: outputFolder,
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: outputFolder,
      port: 8084,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'live-demo/index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: 'live-demo/public',
            from: '**/*',
            to: outputFolder
          },
          {
            context: 'src/images/',
            from: '**/*',
            to: outputFolder + '/images'
          }]
      })
    ]
  };
};
