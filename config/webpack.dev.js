const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
    host: "0.0.0.0",
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/", 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
