import React from "react";
import ReactDOM from "react-dom";
import Fibonacci from "./components/Fibonacci";
import Prime from "./components/Prime";
import { FaPlusCircle, FaSync, FaGithub } from "react-icons/fa";
import "bulma/css/bulma.css";

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
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <h1 className="title is-3 has-text-centered">
              Fibonacci Sequence &amp; Prime Number Calculator
            </h1>
          </div>
        </div>

        <div className="hero-body">
          <div className="buttons">
            <button className="button is-medium" onClick={add10}>
              <span>Add 10</span>
              <span className="icon is-small">
                <FaPlusCircle size={18} />
              </span>
            </button>
            <button className="button is-medium" onClick={handleReset}>
              <span>Reset</span>
              <span className="icon">
                <FaSync color="rgb(20, 20, 20)" size={18} />
              </span>
            </button>
          </div>
        </div>
        <div className="hero-body">
          <Fibonacci
            count={fibCount}
            increment={() => setFibCount(c => c + 1)}
          />

          <Prime
            count={primeCount}
            increment={() => setPrimeCount(c => c + 1)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
