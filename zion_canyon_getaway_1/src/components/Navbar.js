import React from "react";

const Navbar = props => {
  return (
    <div>
      <nav />
      <div>
        <a href="/" className="brand-logo">
          ZCG
        </a>
        <ul>
          <li>
            <a href="/contact" className="nav-list">
              Contact
            </a>
          </li>
          <li>
            <a href="/booking" className="nav-list">
              Booking
            </a>
          </li>
          <li>
            <a href="/accomodations" className="nav-list">
              Accomodations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
