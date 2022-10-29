import React from "react";
import "./Navbar.css";
import { logo_lm, logo_dm, switcher_lm, switcher_dm } from "../../svgs.js";

const Navbar = (props) => {
  console.log(props.mode);
  return (
    <div className={props.mode ? "navbar-light" : "navbar-dark"}>
      <div
        className={
          props.mode
            ? "navbar-light__logoContainer"
            : "navbar-dark__logoContainer"
        }
      >
        <img
          src={props.mode ? logo_lm : logo_dm}
          className={
            props.mode ? "navbar-light__logoImage" : "navbar-dark__logoImage"
          }
        />
      </div>

      <div
        className={
          props.mode
            ? "navbar-light__buttonsContainer"
            : "navbar-dark__buttonsContainer"
        }
      >
        <button
          className={
            props.mode
              ? "navbar-light__switchButton"
              : "navbar-dark__switchButton"
          }
          onClick={() => props.changeMode()}
        >
          <img
            className={
              props.mode ? "navbar-light__switchImg" : "navbar-dark__switchImg"
            }
            src={props.mode ? switcher_lm : switcher_dm}
          />
        </button>
        <button
          className={
            props.mode
              ? "navbar-light__emptyButton"
              : "navbar-dark__emptyButton"
          }
        >
          Projects
        </button>
        <button
          className={
            props.mode ? "navbar-light__fullButton" : "navbar-dark__fullButton"
          }
        >
          Say Hi!
        </button>
      </div>
    </div>
  );
};

export default Navbar;
