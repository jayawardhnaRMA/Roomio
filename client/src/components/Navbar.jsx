import React from "react";
import "../styles/Navbar.css";
import logoIcon from "../assets/Icon.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo">
          <div className="logo-icon-box">
            <img
              src={logoIcon}
              alt="Roomio Logo"
              className="logo-icon"
            />
          </div>
          <span className="logo-text">Roomio</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">How It Works</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right Side */}
        <div className="nav-actions">
          <a href="#" className="login">Login</a>
          <button className="get-started">Get Started</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;