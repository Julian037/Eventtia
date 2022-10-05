import { useState } from "react";
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const maxAvailableItems = 15;
  const minimumValue = 0;

  function suma(i) {
    if (typeof i === "number") {
      setNum(num + i);
    }
  }

  function resta(i) {
    // revisar que el tipo de i sea === number
    if (typeof i === "number") {
      setNum(num - i);
    }
  }

  return (
    <div className="App">
      <div className="contador">
        <button className="button" onClick={() => resta(1)} disabled={num <= minimumValue}>
          -
        </button>
        <p>contador {num}</p>
        <button
          className="button"
          onClick={() => suma(1)}
          // deshabilitar cuando el contador sea mayor o igual a $variable
          disabled={num >= maxAvailableItems}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
