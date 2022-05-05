const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'babylonjs-moveable-type.js',
    library: {
      name: {
        root: 'MoveableType',
        amd: 'babylonjs-moveable-type',
        commonjs: 'babylonjs-moveable-type',
      },
      type: "umd"
    },
  },
  externals: {
    "@babylonjs/core": {
      commonjs: "@babylonjs/core",
      commonjs2: "@babylonjs/core",
      amd: "@babylonjs/core",
      root: "BABYLON",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
