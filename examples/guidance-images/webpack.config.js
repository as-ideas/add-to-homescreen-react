const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  const outputFolder = Path.join(__dirname, './dist');

  return {
    entry: ['./examples/guidance-images/index.js'],
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
      port: 8082,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'examples/guidance-images/index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: 'examples/guidance-images/public',
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
