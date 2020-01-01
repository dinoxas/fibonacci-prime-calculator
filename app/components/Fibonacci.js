import React from "react";
import { calculateFib, suffixOf } from "../utils/math";
import { FaChevronCircleRight } from "react-icons/fa";

export default function NthFib({ count, increment }) {
  const fib = calculateFib(count);

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
