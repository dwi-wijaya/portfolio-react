import React from "react";
import Data from "./Data";
import "./skills.css";
import SkillItem from "./SkillItem";

const Skills = () => {

    return (
        <div className="section__subtitle">
            <div className="scroll" style={{ "--time": "60s" }}>
                {[...Array(2)].map((index) => (
                    <div key={index}>
                        {Data.map((skill, index) => {
                    return (
                        <SkillItem key={index} skill={skill} />
                    );
                })}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Skills;
