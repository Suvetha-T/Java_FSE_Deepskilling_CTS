import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
    sayHello();
  };

  
  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  
  const sayHello = () => {
    alert("Hello! Member.");
  };

  
  const sayWelcome = (message) => {
    alert(`${message}`);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  };

  return (
    <div className="App">
      <h1>Event Examples</h1>
      
      <div className="counter-section">
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      
      <div className="button-section">
        <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
        <button onClick={handleClick}>Click on me</button>
      </div>
      
      <CurrencyConvertor />
    </div>
  );
}

export default App;