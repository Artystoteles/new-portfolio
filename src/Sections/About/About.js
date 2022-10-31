import React from "react";
import "./About.css";
import { s5, s4, s3, html_css, js, react, ts } from "../../svgs";

const About = () => {
  const tech = [
    {
      id: 0,
      img: html_css,
      rating: s5,
    },
    {
      id: 1,
      img: js,
      rating: s4,
    },
    {
      id: 2,
      img: react,
      rating: s4,
    },
    {
      id: 3,
      img: ts,
      rating: s3,
    },
  ];
  return (
    <div className="about">
      <h2 className="about__header">Something about me</h2>

      <div className="about__content">
        <div className="about__aboutMe">
          My name is Daniel, I live in Warsaw and I'm a Frontend developer :D
          I'm interested in technology in particular programming and that's why
          I've been writing websites for more than 1,5 years. In which
          technologies? I write websites mainly in React using scss, sometimes
          using typescript and if I come up with some brilliant project I am
          able to write fullstack applications. Programming is a big part of my
          life and even in my free time I read news from the world of developers
          or write interesting projects that come to my mind. I am looking for a
          job that will give me the opportunity to develop my skills, as well as
          gain new knowledge through interesting projects
        </div>
        <div className="about__tech">
          <p className="about__techHeader">Tech stack:</p>
          {tech.map((skill) => (
            <div key={skill.id} className="about__singleSkill">
              <div className="about__skillContainer">
                <img className="about__skillImg" src={skill.img} />
              </div>
              <div className="about__skillRating">
                <div className="about__starContainer">
                  <img src={skill.rating} className="about__starImg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
