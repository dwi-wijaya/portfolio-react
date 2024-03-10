// ThemeToggle.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import LightIcon from '../../assets/theme-light.svg';
import DarkIcon from '../../assets/theme-dark.svg';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className='toggle theme__toggle' onClick={toggleTheme}>
            <img src={theme == 'dark' ? DarkIcon : LightIcon} alt="Theme Icon" />
        </button>
    );
};

export default ThemeToggle;
