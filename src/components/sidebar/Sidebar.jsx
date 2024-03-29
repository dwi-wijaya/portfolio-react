import React, { useEffect, useRef, useState } from 'react';
import './sidebar.css';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-light.svg';
import { useTheme } from '../../context/ThemeContext';
import 'simple-line-icons'
import { Link, NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants/menu';

const Sidebar = () => {
    const { theme } = useTheme();
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        document.body.setAttribute('class', toggle ? 'sidebar-expanded' : '');
        document.body.setAttribute('class', toggle ? 'sidebar-expanded' : '');
    }, [toggle]);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setToggle(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return (
        <>
            <aside ref={sidebarRef} className={`aside ${toggle && 'show-menu'}`}>
                <Link aria-label='go home' to="" className="nav__logo">
                    <img src={theme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </Link>
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
                <div onClick={() => setToggle(!toggle)} className={`toggle sidebar__toggle ${toggle ? 'sidebar__toggle-open' : ''}`}>
                    <i className="icon-menu"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
