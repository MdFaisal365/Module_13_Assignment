import React from 'react';
import NavBar from '../Components/NavBar';
import ServiceContent from '../Components/ServiceContent';
const Service = () => {
    return (
        <div className='container'>
            <NavBar/>
            <div className='header'>
                <h2>Services</h2>
            </div>

            <div className='service-body'>
            <ServiceContent/>
            </div>

        </div>
    );
};

export default Service;