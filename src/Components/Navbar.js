import React from 'react';
import './Navbar.css';
import Logo from './logo.svg'; // Import your logo image here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="title">MR. BEAN</span>
      </div>
      <div className="navbar-right">
        <a href="https://x.com" className="nav-link">CONNECT</a>

      </div>
    </nav>
  );
};

export default Navbar;
