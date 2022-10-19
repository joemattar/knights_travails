const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.js",
  mode: "development",
  // Module loaders
  module: {
    rules: [
      // Style Loader & CSS loader - modules must be installed first
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Images Loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Knights Travails",
    }),
  ],
};
