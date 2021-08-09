const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const path = require('path');

module.exports = function override(config, env) {
 const wasmExtensionRegExp = /\.wasm$/;
 config.module.rules.forEach(rule => {
   (rule.oneOf || []).forEach(oneOf => {
     if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
       // make file-loader ignore WASM files
       oneOf.exclude.push(wasmExtensionRegExp);
     }
   });
 });

  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new WasmPackPlugin({
     crateDirectory: path.resolve(__dirname, "web-assembly"),
     outDir: path.resolve(__dirname, "src/compiled-wasm"),
    })
  );
  return config;
}