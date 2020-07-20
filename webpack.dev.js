const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    open: false,
    hot: true,
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9001,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.NamedModulesPlugin(),
  ],
});
