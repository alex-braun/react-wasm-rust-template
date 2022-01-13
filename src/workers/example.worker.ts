// These imports are only for typing
import { Foo as FooStruct, add as addType } from "../compiled-wasm";

// The add function is not used here, it's only for documentation
let addWasm: typeof addType;
let FooWasm: FooStruct;

let wasmModule: any;

const loadWasm = async () => {
  const wasm = await import('../compiled-wasm');
  wasmModule = wasm;
}

const initializeWasm = () => {
  const {
    Foo,
    // add
  } = wasmModule;

  FooWasm = Foo.new(0);
  // addWasm = add;
}

onmessage = (message: any) => {
  const { type } = message.data;
  switch (type) {
    case 'load-wasm':
        loadWasm().then(() => initializeWasm());
      break;
    case 'get-value':
      postMessage({ type: 'value-is-received', value: FooWasm.get() });
      break;
    case 'set-value':
      // add values together
      const newValue = FooWasm.get() + message.data.value;
      FooWasm.set(newValue);
      postMessage({ type: 'value-is-set' });
      break;
  }
};