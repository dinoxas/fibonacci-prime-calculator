import React from "react";
import ReactDOM from "react-dom";
import NthFib from "./components/Fibonacci";
import NthPrime from "./components/Prime";
import "./index.css";

function App() {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);

  const handleReset = () => {
    setFibCount(1);
    setPrimeCount(1);
  };

  const add10 = () => {
    setFibCount(c => c + 10);
    setPrimeCount(c => c + 10);
  };

  return (
    <React.Fragment>
      <button onClick={add10}>Add 10</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <NthFib count={fibCount} increment={() => setFibCount(c => c + 1)} />
      <hr />
      <NthPrime
        count={primeCount}
        increment={() => setPrimeCount(c => c + 1)}
      />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
