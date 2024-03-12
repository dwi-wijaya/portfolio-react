import React from "react";
import "./resume.css";
import Data from "./Data";

const Resume = () => {
  return (
    <section data-section className="resume container section" id="resume">
      <div className="section__title__wrapper">
        <h2 className="section__title">Experience</h2>
      </div>
      <p className="section__subtitle">
        Discover my professional background and valuable experiences.
      </p>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <div key={id} className="timeline__item">
                  <i className="icon-graduation"></i>
                  <span className="timeline__date">{val.year}</span>
                  <h3 className="timeline__title">{val.major}</h3>
                  <p className="timeline__text">{val.title}</p>
                  <p className="timeline__degree">~ {val.degree}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <div key={id} className="timeline__item">
                  <i className="icon-briefcase"></i>
                  <span className="timeline__date">{val.year}</span>
                  <h3 className="timeline__title">{val.position}</h3>
                  <div className="timeline__work-wrapper">
                    <a href="" className="timeline__text timeline__company">
                      {val.company}
                    </a>
                    <span>•</span> {val.location}
                  </div>
                    <p className="timeline__duration">~ {val.duration}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
export default Resume;
