import React from "react";
import light from '../../assets/theme-light.svg'
const SkillItem = ({ skill,index }) => {
    return (
        <span key={index}>
            {skill.label}
        </span>
    );
};

export default SkillItem;
