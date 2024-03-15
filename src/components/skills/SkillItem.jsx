import React from "react";
import light from '../../assets/theme-light.svg'
const SkillItem = ({ skill }) => {
    return (
        <span>
            {skill.label}
        </span>
    );
};

export default SkillItem;
