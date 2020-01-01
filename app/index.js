import React from "react";
import ReactDOM from "react-dom";
import NthFib from "./components/Fibonacci";
import NthPrime from "./components/Prime";
import { FaPlusCircle, FaSync } from "react-icons/fa";
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
      <div className="container">
        <h1 className="heading">
          Fibonacci Sequence &amp; Prime Number Calculator
        </h1>
        <button className="btn dark-btn" onClick={add10}>
          <span className="btn-text">Add 10</span>
          <FaPlusCircle color="rgb(255,255,255)" size={20} />
        </button>
        <button className="btn light-btn" onClick={handleReset}>
          <span className="btn-text">Reset</span>
          <FaSync color="rgb(20, 20, 20)" size={20} />
        </button>
        <hr />
        <NthFib count={fibCount} increment={() => setFibCount(c => c + 1)} />
        <hr />
        <NthPrime
          count={primeCount}
          increment={() => setPrimeCount(c => c + 1)}
        />
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
