import React from 'react';

const ProjectItems = () => {
    return (
        <div className='container-project project-items'>
            <div className='single-item'>
                <div className='project-image-box'>
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/08/30120359/image-60-768x432.png" alt="" />
                </div>
                <h4 className='font-color'>Slack clone using React</h4>
                <p className='small-font font-color'>An intermediate-advanced level of React-Redux and a basic understanding of Firebase databases are both used in this project. The simplicity and speed of these programming languages make them a good fit for this tech stack.</p>
            </div>
            <div className='single-item'>
                <div className='project-image-box'>
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/08/30121205/image-64-768x768.png" alt="" />
                </div>
                <h4 className='font-color'>Rat in a Maze</h4>
                <p className='small-font font-color'>When we start this problem, the rat will be in a specific cell, and we must determine every route the rat could take from the source point to the destination cell. You will now create an easy react application showing all potential web page pathways.</p>
            </div>
            <div className='single-item'>
                <div className='project-image-box'>
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/08/30121438/image-65.png" alt="" />
                </div>
                <h4 className='font-color'>WhatsApp Web Clone</h4>
                <p className='small-font font-color'>This project will offer you hands-on knowledge of the React library. There are currently many stacks and technologies to master in full-stack development, and it is pretty simple to become overburdened and sidetracked. Among the most widely used Frontend libraries is React, which is utilized by numerous businesses, including Facebook, Pinterest, Uber, Instagram, and many more.</p>
            </div>

        </div>
    );
};

export default ProjectItems;