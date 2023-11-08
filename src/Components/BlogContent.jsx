import {useEffect} from 'react';

const BlogContent = () => {
    let myvalue;


    myvalue = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis corporis vitae incidunt numquam quas modi iste sapiente praesentium alias, minus eaque. Enim, eveniet necessitatibus illum fugit voluptate architecto unde obcaecati.`

    return (
        <div>
        <div className='heading-contant'>
            <h2>MTfaisal Blog</h2>
            <div className='blog-image'>            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ45FP60Z0dVi6qc9RVN8y_FIP_ntPyc40AxzqD77MxFLiswVnt" alt="" /></div>
        </div>
        <div>
            {myvalue}
        </div>
        </div>
    );
};

export default BlogContent;