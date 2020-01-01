import React from "react";
import { calculatePrime, suffixOf } from "../utils/math";

export default function NthPrime({ count, increment }) {
  const prime = calculatePrime(count);

  return (
    <div className="container">
      <h2>Nth Prime</h2>
      <p>
        The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>.
      </p>
      <button onClick={increment}>Next prime</button>
    </div>
  );
}
