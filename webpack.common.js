const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./app.ts",
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
