import React from 'react';
import NavBar from '../Components/NavBar';
import BlogContent from '../Components/BlogContent';
const Blog = () => {
    return (
        <div className='container'>
            <NavBar/>
            <div className='header'>
                <h2>Blogs</h2>
            </div>

            <div>
                <BlogContent/>
            </div>

        </div>
    );
};

export default Blog;