import React from 'react'
const socials = ['instagram', 'twitter', 'behance', 'dribbble', 'github', 'facebook'];

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            {socials.map((social, index) => (
                <a aria-label={`go to ${social}`} key={index} href={`https://${social}.com`} target='_blank' className="home__social-link">
                    <i className={`bx bx-tada bxl-${social}`}></i>
                </a>
            ))}
        </div>
    )
}

export default HeaderSocials