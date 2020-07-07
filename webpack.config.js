const path = require('path');

// Modules
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const SRC_PATH = path.resolve(__dirname, 'src');
  const DIST_PATH = path.resolve(__dirname, 'public/dist');

  return {
    entry: {
      'index': './src/scripts/index.ts'
    },
    output: {
      path: DIST_PATH,
      filename: 'js/[name].bundle.js'
    },
    plugins: [
      // For CSS
      new MiniCssExtractPlugin({
        path: DIST_PATH,
        filename: 'css/[name].css',
      }),
    ],
    module: {
      rules: [
        // TypeScript (Babel)
        {
          test: /\.ts$/,
          include: path.join(SRC_PATH, 'scripts'),
          loader: 'babel-loader?cacheDirectory',
          exclude: /node_modules/,
        },
        // SCSS
        {
          test: /\.scss$/,
          include: path.join(SRC_PATH, 'styles'),
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      port: 3000,
      publicPath: '/public/'
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      }
    },
  };
};
