const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Webpackbar = require("webpackbar");

module.exports = merge(common, {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        cache: true,
        sourceMap: false,
        parallel: true,
      }),
    ],
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new Webpackbar(),
    new MiniCssExtractPlugin({
      filename: "[id].[contenthash:12].css",
      chunkFilename: "[id].[contenthash:12].css",
    }),
  ],
});
