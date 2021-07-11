const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, 'dist'),
    publicPath: "dist", // 虚拟打包路径
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    contentBase: 'www',
  },
};
