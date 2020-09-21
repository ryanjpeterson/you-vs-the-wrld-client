import React from "react";
import "./header.styles.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="title-container">
        <a href="/">
          <img id="title" src={logo} alt="you vs the wrld" />
        </a>
      </div>

      <div class="social-links">
        <a
          href="https://www.instagram.com/youvsthewrld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
