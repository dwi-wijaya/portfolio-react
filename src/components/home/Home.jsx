
import React, { useEffect } from 'react';
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className="header__wrapper">
                <Shapes />
            </div>
            <section data-section className="home container" id="home">
                <div className="home-section">
                    <div className="intro">
                        <img
                            width={108}
                            height={108}
                            src={Me}
                            alt="Avatar Dwi"
                            className="home__img"
                        />
                        <div className="home__greeting">
                            <h1 className="home__name">
                                Hi, Dwi Wijaya
                            </h1>
                            <div className="animate-waving-hand">👋</div>
                        </div>
                        <span className="home__role">
                            I&apos;m a Full-stack developer <i className="bx bx-code-alt"></i> &nbsp;
                        </span>
                        <HeaderSocials />
                        <hr className="border" />
                        <div className='card'>
                            <div className='contact__header'>
                                <i className='bx bx-rocket'></i>
                                <h3 className='text-xl font-medium'>Lets work together!</h3>
                            </div>
                            <p className='contact__content'>
                                I&apos;m open for freelance projects, feel free to email me to see how
                                can we collaborate.
                            </p>
                            <Link to='contact'
                                aria-label='contact me'
                                className='btn'
                            >
                                Contact me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home
