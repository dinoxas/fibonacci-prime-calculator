import React from "react";

import { FaCalculator, FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item is-size-6">
            Fibonacci &amp; Prime Calculator
          </div>
          <div className="navbar-item">
            <FaReact size="32" color="#00d8ff" style={{ marginRight: "5px" }} />
            <FaCalculator size="32" color="fff" />
          </div>
        </div>
      </div>
    </nav>
  );
}
