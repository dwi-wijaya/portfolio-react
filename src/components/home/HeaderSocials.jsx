import React from 'react'
const socials = ['instagram', 'twitter', 'behance', 'dribbble', 'github', 'facebook'];
import 'boxicons'

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            {socials.map((social, index) => (
                <a aria-label={`go to ${social}`} key={index} href={`https://${social}.com`} target='_blank' className="home__social-link">
                    <box-icon name={social} type='logo' animation='tada' ></box-icon>
                </a>
            ))}
        </div>
    )
}

export default HeaderSocials