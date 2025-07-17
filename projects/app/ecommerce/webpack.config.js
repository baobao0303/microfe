const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "ecommerce",
    publicPath: "auto",
  },
  devServer: {
    port: 4201,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
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
        "./Component": "./src/app/ecommerce.module.ts",
      },
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        rxjs: { singleton: true, strictVersion: true, requiredVersion: "auto" },
      },
    }),
  ],
};
