const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        include: path.resolve(__dirname, "src"),
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        loader: "url-loader",
        options: {
          limit: "8192",
          name: "assets/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      src: path.resolve("src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
    new VueLoaderPlugin(),
  ],
};
