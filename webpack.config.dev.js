const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/index.js",
    },
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "./build"),
      filename: "static/js/[name].js",
      chunkFilename: "static/js/[name].js",
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.jpe?g|png$/,
          use: ["url-loader", "file-loader"],
          generator: {
            filename: "static/assets/[name].png",
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules/",
          loader: "babel-loader",
        },
        {
          test: /\.(css|scss|sass)$/i,
          use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "sass-loader"],
        },
      ],
    },
  }
}
