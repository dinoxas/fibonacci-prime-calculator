import React from "react";
import { calculateFib, suffixOf } from "../utils/math";
import { FaChevronCircleRight } from "react-icons/fa";

function Fibonacci({ count, increment }) {
  const fib = React.useMemo(() => calculateFib(count), [count]);

  return (
    <div className="content">
      <h2 className="title is-4">Fibonacci</h2>
      <p>
        The <span className="is-size-4">{suffixOf(count)}</span> number in the
        Fibonacci sequence is <span className="is-size-4">{fib}</span>.
      </p>
      <button className="button" onClick={increment}>
        <span>Next</span>
        <span className="icon">
          <FaChevronCircleRight color="rgb(20, 20, 20)" size={16} />
        </span>
      </button>
    </div>
  );
}

// skip re-rendering if props have not changed
export default React.memo(Fibonacci);
