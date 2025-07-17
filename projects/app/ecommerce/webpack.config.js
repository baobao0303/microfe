const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/main.ts",
  devServer: {
    port: 4201, // Cổng cho Ecommerce
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../../../dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ecommerce",
      filename: "remoteEntry.js",
      exposes: {
        "./EcommerceModule": "./src/app/ecommerce.module.ts",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/app/ecommerce.component.html"), to: path.resolve(__dirname, "../../../dist") },
        { from: path.resolve(__dirname, "src/app/ecommerce.component.scss"), to: path.resolve(__dirname, "../../../dist") },
      ],
    }),
  ],
}