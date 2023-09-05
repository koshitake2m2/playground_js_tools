const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const GlobEntries = require("webpack-glob-entries");

module.exports = {
  mode: "production",
  entry: GlobEntries("./src/**/*.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["@babel/typescript"]],
        },
      },
    ],
  },
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  devtool: "source-map",
  stats: {
    colors: true,
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: false,
  },
};

// const path = require("path");

// module.exports = {
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   mode: "development",
//   entry: {
//     soakTest: "./src/get-200-status-test.ts",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     libraryTarget: "commonjs",
//     filename: "[name].bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         loader: "babel-loader",
//         options: {
//           presets: [["@babel/typescript"]],
//         },
//       },
//     ],
//   },
//   stats: {
//     colors: true,
//   },
//   externals: /k6(\/.*)?/,
//   devtool: "source-map",
// };
