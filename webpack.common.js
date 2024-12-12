const path = require("path");

module.exports = {
  entry: {
    app: "./js/app.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "./bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },
};
