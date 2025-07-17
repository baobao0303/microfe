const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/main.ts",
  devServer: {
    port: 4202, // Cổng cho Portal
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
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "portal",
      filename: "remoteEntry.js",
      exposes: {
        "./PortalModule": "./src/app/portal.module.ts",
      },
      shared: {},
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
       new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/app/portal.component.html"), to: path.resolve(__dirname, "../../../dist") },
        { from: path.resolve(__dirname, "src/app/portal.component.scss"), to: path.resolve(__dirname, "../../../dist") },
      ],
    }),
  ],
};
