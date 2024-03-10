import React, { useState, useEffect } from 'react';
import LightIcon from '../../assets/theme-light.svg';
import DarkIcon from '../../assets/theme-dark.svg';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Check if the theme mode has been saved in local storage
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        // Save the theme preference to local storage
        localStorage.setItem('themeMode', JSON.stringify(theme));

        // Change the data-theme attribute on the <body> element
        document.body.setAttribute('data-theme', theme ? 'dark' : 'light');
    }, [theme]);

    const themeToggle = () => {
        setTheme(prevMode => !prevMode);
    };

    return (
        <button className='toggle theme__toggle' onClick={themeToggle}>
            <img src={theme ? DarkIcon : LightIcon} alt="Theme Icon" />
        </button>
    );
};

export default ThemeToggle;
