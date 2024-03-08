import React, { useEffect } from 'react';
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {

    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="Avatar Dwi" className="home__img" />
                <h1 className="home__name">
                    Dwi Wijaya
                </h1>
                <span className="home__education">
                    I'm a Full-stack developer
                </span>
                <HeaderSocials />
                <a aria-label='hire me' href="#contact" className="btn">Hire Me</a>
                <ScrollDown />

            </div>
            <Shapes />
        </section>
    )
}
export default Home
