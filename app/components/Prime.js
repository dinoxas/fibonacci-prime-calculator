import React from "react";
import { calculatePrime, suffixOf } from "../utils/math";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Prime({ count, increment }) {
  const prime = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <div>
      <h2>Prime</h2>
      <p>
        The <span className="lg">{suffixOf(count)}</span> Prime number is{" "}
        <span className="lg">{prime}</span>.
      </p>
      <button className="btn light-btn" onClick={increment}>
        <span className="btn-text">Next prime</span>
        <FaChevronCircleRight color="rgb(20, 20, 20)" size={16} />
      </button>
    </div>
  );
}
