import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavTabs() {
  return (
    <div className="navtabs container d-flex align-items-start">
      <div className="nav-name flex-fill fs-1">Najiba Haidari</div>
      <div className="nav-list flex-fill p-4 ">
        <a href="#about" className="nav-tab m-4 text-decoration-none text-light">
          About
        </a>
        <a href="#portfolio" className="nav-tab m-4 text-decoration-none text-light">
          Portfolio
        </a>
        <a href="#resume" className="nav-tab m-4 text-decoration-none text-light">
          Resume
        </a>
        <a href="#contact" className="nav-tab m-4 text-decoration-none text-light">
          Contact
        </a>
      </div>
    </div>
  );
}
