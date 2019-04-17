import React from 'react';

const Navbar = props => {
    return (
        <div>
            <nav className="nav-wrapper"></nav>
            <div className="container">
                <a href="" className="brand-logo">blah blah</a>
                <ul>
                    <li><a href="/" className="nav-list">Home</a></li>
                    <li><a href="/contact" className="nav-list">Contact</a></li>
                    <li><a href="/booking" className="nav-list">Booking</a></li>
                    <li><a href="/accomodations" className="nav-list">Accomodations</a></li>
                </ul>
            </div>
        </div>
    );
};


export default Navbar;