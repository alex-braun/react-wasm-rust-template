# React Wasm Rust Template

This project is setup as a minimal starting point using create-react-app and WebAssembly.  WebAssembly (wasm) is a simple machine model and executable format with an extensive specification. It is designed to be portable, compact, and execute at or near native speeds. It's a target for compilation of high-level languages like C/C++/Rust.  This template is setup to use Rust and the library wasm-bindgen, which provides automatic generation of JavaScript bindings to our Wasm module.

## Preparation steps

There are two steps you'll need to get up and running:\
* [Follow directions here](https://www.rust-lang.org/tools/install) to setup the Rust toolchain for development.
* Then, you'll need to setup [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/).  wasm-pack allows you to build, test, and publish Rust-generated WebAssembly components.

All user editable wasm code can be found in the `web-assembly` directory.  This folder is watched by webpack, so any updates will automatically trigger compilation and deploy the new code in `/src/compiled-wasm`.  The contents of `compiled-wasm` is auto-generated so you should not be editing it directly.

[Create React App](https://github.com/facebook/create-react-app)\
[Rust](https://www.rust-lang.org)\
[Wasm Bindgen](https://rustwasm.github.io/wasm-bindgen/)\

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to the src and web-assembly directories.\

The first time this script runs, you will see a `compiled-wasm` directory auto generate in `src`. Programming Rust should be from the `web-assembly` directory only, and will compile into `compiled-wasm` on save.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
