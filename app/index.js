import React from "react";
import ReactDOM from "react-dom";
import Fibonacci from "./components/Fibonacci";
import Prime from "./components/Prime";
import Header from "./components/Header";
import { FaPlusCircle, FaSync } from "react-icons/fa";
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
      <Header />

      <div className="container">
        <div className="column">
          <div className="buttons">
            <button
              className="button is-medium is-link is-light"
              onClick={add10}
            >
              <span>Add 10</span>
              <span className="icon is-small">
                <FaPlusCircle size={18} />
              </span>
            </button>
            <button
              className="button is-medium is-danger is-light"
              onClick={handleReset}
            >
              <span>Reset</span>
              <span className="icon">
                <FaSync size={18} />
              </span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="column">
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
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
