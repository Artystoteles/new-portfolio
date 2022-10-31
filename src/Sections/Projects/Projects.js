import React, { useState } from "react";
import "./Projects.css";
import {
  react,
  scss,
  node,
  mongo,
  ts,
  firebase,
  arrow_left,
  arrow_left_dm,
  arrow_right,
  arrow_right_dm,
  github_lm_a,
  github_dm_a,
} from "../../svgs";
import Singleproject from "../../Components/SingleProject/Singleproject";

const Projects = ({ theme }) => {
  const [index, setIndex] = useState(0);

  const goPrevious = () => {
    const isFirst = index === 0;
    const newIndex = isFirst ? projects.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const goNext = () => {
    const isLast = index === projects.length - 1;
    const newIndex = isLast ? 0 : index + 1;
    setIndex(newIndex);
  };

  const projects = [
    {
      id: 0,
      name: "MyFridge",
      description:
        "MyFridge is the app we all need. The site has various recipes that can be filtered by ingredients. When we click on the selected products, the site will filter us all the recipes that contain the selected ingredients. The app was created with the help of React and SCSS and with my own data in JSON file",
      tech: [
        {
          img: react,
          name: "React",
        },
        {
          img: scss,
          name: "Scss",
        },
      ],
      link: "https://github.com/Artystoteles/MyFrige",
    },
    {
      id: 1,
      name: "Ecommerce Website",
      description:
        "This is a fullstack website using React + styledcomponents frontend and Node + MongoDB backend. The aplication has a product list with facestoreAPI with sorting products by categories, adding products to cart and payment method using Stripe. ",
      tech: [
        {
          img: react,
          name: "React",
        },
        {
          img: node,
          name: "Node",
        },
        {
          img: mongo,
          name: "MongoDB",
        },
      ],
      link: "https://github.com/Artystoteles/EcommerceApp",
    },
    {
      id: 2,
      name: "Social App",
      description:
        "This app is a smaller version of Twitter. The SocialApp was written in React, Typescript, Scss and with a database in Frebase. The site introduces the ability to log in with a google account to view who has added a post and whether the user has already liked the post.",
      tech: [
        {
          img: react,
          name: "React",
        },
        {
          img: ts,
          name: "TypeScript",
        },
        {
          img: scss,
          name: "SCSS",
        },
        {
          img: firebase,
          name: "Firebase",
        },
      ],
      link: "https://github.com/Artystoteles/social-app",
    },
  ];
  return (
    <div className="projects" id="projects">
      <h2 className="projects__header">Take a look at some cool projects</h2>
      <div className="projects__sliderContainer">
        <Singleproject theme={theme} project={projects[index]} />
        <div className="projects__prevButton" onClick={() => goPrevious()}>
          <img
            className="projects__arrow"
            src={theme === "light" ? arrow_left : arrow_left_dm}
          />
        </div>
        <div className="projects__nextButton" onClick={() => goNext()}>
          <img
            className="projects__arrow"
            src={theme === "light" ? arrow_right : arrow_right_dm}
          />
        </div>
      </div>
      <button className="singleproject__projectButton">
        <a href="https://github.com/Artystoteles" target="_blank">
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
  );
};

export default Projects;
