import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="Navbar">
    <Link to="/">Home</Link>
    |
    <Link to="/calculator">Calculator</Link>
    |
    <Link to="/Quote">Quote</Link>
  </nav>
);

export default Nav;
