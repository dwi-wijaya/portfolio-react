import React, { useState } from 'react';
import './sidebar.css'
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
    const [toggle, showMenu] = useState(false)
    return (
        <>
            <aside className={`aside ${toggle && 'show-menu'}`}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="Dwi-logo" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="icon-user-following"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <i className="icon-briefcase"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#resume" className="nav__link">
                                    <i className="icon-graduation"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#porfolio" className="nav__link">
                                    <i className="icon-layers"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <i className="icon-note"></i>

                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="icon-buble"></i>

                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">&copy; {new Date().getFullYear()}</span>
                </div>
            </aside>
            <div onClick={() => showMenu(!toggle)} className={`nav__toggle ${toggle ? 'nav__toggle-open' : ''}`}>
                <i className="icon-menu"></i>
            </div>
        </>

    )
}
export default Sidebar
