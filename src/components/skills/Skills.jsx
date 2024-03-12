import React from "react";
import Data from "./Data";
import "./skills.css";

const Skills = () => {
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    shuffle(Data);
    return (
        <section data-section className="skills container section" id="skills">
            <div className="section__title__wrapper">
                <h2 className="section__title">Skills</h2>
            </div>
            <p className='section__subtitle'>
                Explore my proficiency in various tools, technologies, and disciplines.
            </p>
            <div className="skills__container">
                {Data.map((skill, index) => {
                    return (
                        <div key={index} className="skill__item">
                            <img
                                className="icon"
                                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                    skill.icon
                                )}`}
                            />
                            {skill.label}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Skills;
