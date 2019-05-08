import React from "react";
import CornerLogo from "../media/svg/CornerLogo";

const Navbar = props => {
  return (
    <div className = "navbar">
      <nav>
        <header className="header">
          <h1 className="logo">
            <a className = "corner-logo" href="/">
              <CornerLogo/>
            </a>
          </h1>
          <ul className="main-nav">
            <li>
              <a href="/booking">Booking</a>
            </li>
            <div className="vl"></div>
            <li>
              <a href="/accomodations">Accomodations</a>
            </li>
            <div className="vl"></div>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
