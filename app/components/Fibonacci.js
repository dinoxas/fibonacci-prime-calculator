import React from "react";
import { calculateFib, suffixOf } from "../utils/math";
import { FaChevronCircleRight } from "react-icons/fa";

function Fibonacci({ count, increment }) {
  const fib = React.useMemo(() => calculateFib(count), [count]);

  return (
    <div>
      <h2>Fibonacci</h2>
      <p>
        The <span className="lg">{suffixOf(count)}</span> number in the
        Fibonacci sequence is <span className="lg">{fib}</span>.
      </p>
      <button className="btn light-btn" onClick={increment}>
        <span className="btn-text">Next number</span>
        <FaChevronCircleRight color="rgb(20, 20, 20)" size={16} />
      </button>
    </div>
  );
}

// skip re-rendering if props have not changed
export default React.memo(Fibonacci);
