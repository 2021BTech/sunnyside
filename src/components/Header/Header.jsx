import React from "react";
import "./Header.modules.css";
//img
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>

        <div className="header-list">
          <a href="/"> About </a>
          <a href="/"> Service </a>
          <a href="/">Project </a>
          <button className="btn-primary">Contact</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
