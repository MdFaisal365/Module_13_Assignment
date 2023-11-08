import React from 'react';
import NavBar from '../Components/NavBar';
import ProjectItems from '../Components/ProjectItems';
const Project = () => {
    return (
        <div className='container'>
            <NavBar/>
            <div className='header'>
                <h2>Projects</h2>
            </div>

            <div>
                <ProjectItems/>
            </div>

        </div>
    );
};

export default Project;