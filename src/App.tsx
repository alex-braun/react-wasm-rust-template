import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [fooStruct, setFooStruct] = useState<any>(null);

  const handleIncrement = () => {
    fooStruct.set(number + 1);
    setNumber(fooStruct.get());
  }

  const handleDecrement = () => {
    fooStruct.set(number - 1);
    setNumber(fooStruct.get());
  }


  useEffect(() => {
    import("./compiled-wasm").then(module => {
      const { Foo } = module;
      setFooStruct(Foo.new(0));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Foo get value: {number}
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
