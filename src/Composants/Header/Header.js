import React from "react";

export default function Header() {
  return (
    <header
      className="navbar has-background-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <h2
        className="column has-text-centered is-size-4 has-text-white "
        style={{ lineHeight: "52px" }}
      >
        APP TO DO LISTE !
      </h2>
    </header>
  );
}
