import React from "react";
import "./Footer.css";
import { logo_dm, email, github_dm_a, linkedin_dm_a } from "../../svgs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logoContainer">
          <img className="footer__logoImg" src={logo_dm} />
        </div>
        <h2 className="footer__name">Daniel Visentini</h2>
      </div>
      <div className="footer__socialContainer">
        <div className="footer__singleSocial">
          <div className="footer__socialImageContainer">
            <img className="footer__socialImage" src={github_dm_a} />
          </div>
          <p className="footer__socialName">
            <a href="https://github.com/Artystoteles" target="_blank">
              GitHub
            </a>
          </p>
        </div>
        <div className="footer__singleSocial">
          <div className="footer__socialImageContainer">
            <img className="footer__socialImage" src={linkedin_dm_a} />
          </div>
          <p className="footer__socialName">
            <a
              href="https://www.linkedin.com/in/danielvisentini/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div className="footer__singleSocial">
          <div className="footer__socialImageContainer">
            <img className="footer__socialImage" src={email} />
          </div>
          <p className="footer__socialName">
            <a href="mailto:daniel.visentini@gmail.com">
              daniel.visentini@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
