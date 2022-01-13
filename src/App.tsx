import React, { useState, useEffect } from 'react';
import WorkerUtils from './WorkerUtils';
import './App.css';

const workerUtils = new WorkerUtils();

function App() {
  const [number, setNumber] = useState(0);

  const onValueCallback = (value: any) => setNumber(value);

  const handleIncrement = () => workerUtils.setValue(1);

  const handleDecrement = () => workerUtils.setValue(-1);

  useEffect(() => {
    workerUtils.init(onValueCallback)
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
