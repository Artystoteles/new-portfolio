import React, { useState } from "react";
import "./Navbar.css";
import { logo_lm, logo_dm, switcher_lm, switcher_dm } from "../../svgs.js";

const Navbar = ({ handleTheme, theme }) => {
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <img
          src={theme === "light" ? logo_lm : logo_dm}
          className="navbar__logoImage"
        />
      </div>

      <div className="navbar__buttonsContainer">
        <button className="navbar__switchButton" onClick={() => handleTheme()}>
          <img
            className="navbar__switchImg"
            src={theme === "light" ? switcher_lm : switcher_dm}
          />
        </button>
        <button className="navbar__emptyButton">
          <a href="#projects">Projects</a>
        </button>
        <button className="navbar__fullButton">
          <a href="#contact">Say Hi!</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
