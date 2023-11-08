import React from 'react';
import NavBar from '../Components/NavBar';
import AboutMainData from '../Components/AboutMainData';
const About = () => {
    return (
        <div className='container'>
            <NavBar/>
            <div className='header'>
                <h2>About</h2>
            </div>

            <div>
                <h2 className='contact-h2'>Creating technology solution that enable businesses to achieve success.</h2>
            </div>
            <AboutMainData/>
        </div>
    );
};

export default About;