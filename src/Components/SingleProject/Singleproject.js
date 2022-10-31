import React from "react";
import "./Singleproject.css";
import { github_lm_a, github_dm_a } from "../../svgs";

const Singleproject = ({ project, theme }) => {
  return (
    <div className="singleproject">
      <h2 className="singleproject__header">{project.name}</h2>
      <div className="singleproject__content">
        <div className="singleproject__description">
          <p className="singleproject__text">{project.description}</p>
          <button className="singleproject__projectButton">
            <a href={project.link} target="_blank">
              GitHub
              <span
                className="singleproject__githubContainer"
                onMouseOver={(e) => (e.target.src = github_dm_a)}
                onMouseOut={(e) => (e.target.src = github_lm_a)}
              >
                <img className="singleproject__githubImg" src={github_lm_a} />
              </span>
            </a>
          </button>
        </div>
        <div className="singleproject__techStack">
          <h2 className="singleproject__techHeader">Technologies:</h2>
          <div className="singleproject__techContainer">
            {project.tech.map((item) => (
              <div className="singleproject__singleTech">
                <div className="singleproject__singleTechContainer">
                  <img
                    className="singleproject__singleTechImg"
                    src={item.img}
                  />
                </div>
                <p className="singleproject__singleTechName">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproject;
