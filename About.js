import React from 'react'
import AboutImg from '../assets/images/about-img'
const About = () => {
    return (
        <section className='about' id='about'>

            <h1 className='heading'>
                <span>about </span>us
            </h1>
            <div className='row'>
                <div className='image'>
                    <img src={AboutImg} />
                </div>
                <div className='content'>
                    <h3>what makes our food special?</h3>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more</p>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more</p>
                    <a href='#' className='btn'>Learn More</a>
                    </div>
            </div>
        </section>
    )
}

export default About