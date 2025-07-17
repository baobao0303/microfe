const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? "production" : "development",
    context: __dirname,
    entry: "./src/main.ts",
    devServer: {
      port: 4200,
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
      path: path.resolve(__dirname, "dist"), // Đường dẫn đến thư mục output
      filename: isProduction ? "[name].[contenthash].js" : "[name].js", // Tên file có hash cho production
      publicPath: "auto",
    },
    optimization: {
      minimize: isProduction, // Tối ưu hóa chỉ khi ở chế độ production
      splitChunks: {
        chunks: "all", // Tách chunks cho tối ưu hóa
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
          ecommerce: "ecommerce@http://localhost:4201/remoteEntry.js",
          portal: "portal@http://localhost:4202/remoteEntry.js",
        },
        shared: {}, // Chia sẻ các dependency nếu cần
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, "src/app/app.component.html"), to: path.resolve(__dirname, "../../../dist") },
          { from: path.resolve(__dirname, "src/app/app.component.scss"), to: path.resolve(__dirname, "../../../dist") },
        ],
      }),
    ],
  };
};