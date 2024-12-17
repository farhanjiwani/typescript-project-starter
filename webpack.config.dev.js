const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: {
    loggingDebug: ["sass-loader"],
  },
  devServer: {
    liveReload: true,
    hot: true,
    client: {
      progress: true,
    },
    static: {
      directory: path.join(__dirname, "src/static"),
      publicPath: "/",
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "index.html",
          to: ".",
        },
      ],
    }),
  ],
});
