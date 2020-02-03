import React from "react";
import { calculatePrime, suffixOf } from "../utils/math";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Prime({ count, increment }) {
  const prime = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <div className="content">
      <h2 className="title is-4">Prime</h2>
      <p>
        The <span className="is-size-4">{suffixOf(count)}</span> Prime number is{" "}
        <span className="is-size-4">{prime}</span>.
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
