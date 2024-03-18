import React, { useState } from 'react';
import './sidebar.css';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-light.svg';
import { useTheme } from '../../context/ThemeContext';
import 'simple-line-icons'
import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants/menu';

const Sidebar = () => {
    const { theme } = useTheme();
    const [toggle, showMenu] = useState(false);

    // Define your navigation items and icons using an object
    

    return (
        <>
            <aside className={`aside ${toggle && 'show-menu'}`}>
                <a aria-label='go home' href="#home" className="nav__logo">
                    <img src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {MENU_ITEMS.map((item, index) => (
                                <li key={index} className='nav__item '>
                                    <NavLink to={`${item.href}`} title={item.label} aria-label={`go to ${item.href}`} className="nav__link">
                                        <i className={item.iconClass}></i>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">&copy; {new Date().getFullYear()}</span>
                </div>
            </aside>
            <div onClick={() => showMenu(!toggle)} className={`toggle nav__toggle ${toggle ? 'nav__toggle-open' : ''}`}>
                <i className="icon-menu"></i>
            </div>
        </>

    );
};

export default Sidebar;
