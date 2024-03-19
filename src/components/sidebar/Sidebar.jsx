import React, { useState, useEffect, useRef } from 'react';
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
    const sidebarRef = useRef(null);

    useEffect(() => {
        // Fungsi untuk menutup sidebar saat mengklik di luar sidebar
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        // Tambahkan event listener saat komponen dimount
        document.addEventListener('mousedown', handleOutsideClick);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <aside ref={sidebarRef} className={`aside ${toggle && 'show-menu'}`}>
                <Link aria-label='go home' to="/" className="nav__logo">
                    <img src={theme === 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />
                </Link>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {MENU_ITEMS.map((item, index) => (
                                <li key={index} className='nav__item'>
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
            <div onClick={() => setToggle(!toggle)} className={`toggle nav__toggle ${toggle ? 'nav__toggle-open' : ''}`}>
                <i className="icon-menu"></i>
            </div>
        </>
    );
};

export default Sidebar;
