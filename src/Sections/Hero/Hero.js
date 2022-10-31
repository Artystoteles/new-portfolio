import React from "react";
import "./Hero.css";
import Resume from "../../Resume/Resume.pdf";
import {
  github_lm,
  github_dm,
  github_dm_a,
  github_lm_a,
  linkedin_lm,
  linkedin_dm,
  linkedin_dm_a,
  linkedin_lm_a,
} from "../../svgs";
const Hero = ({ theme }) => {
  return (
    <div className="hero">
      <h1 className="hero__header">Hello! My name is Daniel </h1>
      <span className="hero__subHeader">I’m Frontend developer</span>
      <div className="hero__socialButtons">
        <div
          className="hero__githubContainer"
          onMouseOver={(e) =>
            (e.target.src = theme === "light" ? github_lm_a : github_dm_a)
          }
          onMouseOut={(e) =>
            (e.target.src = theme === "light" ? github_lm : github_dm)
          }
        >
          <a href="https://github.com/Artystoteles" target="_blank">
            <img
              className="hero__githubImg"
              src={theme === "light" ? github_lm : github_dm}
            />
          </a>
        </div>
        <div
          className="hero__linkedinContainer"
          onMouseOver={(e) =>
            (e.target.src = theme === "light" ? linkedin_lm_a : linkedin_dm_a)
          }
          onMouseOut={(e) =>
            (e.target.src = theme === "light" ? linkedin_lm : linkedin_dm)
          }
        >
          <a
            href="https://www.linkedin.com/in/danielvisentini/"
            target="_blank"
          >
            <img
              className="hero__linkedinImg"
              src={theme === "light" ? linkedin_lm : linkedin_dm}
            />
          </a>
        </div>
      </div>
      <button className="hero__resumeButton">
        <a href={Resume} download="Resume.pdf">
          Resume
        </a>
      </button>
    </div>
  );
};

export default Hero;
