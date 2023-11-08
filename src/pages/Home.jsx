import {useRef} from 'react';
import NavBar from '../Components/NavBar';


const Home = () => {

    const myPicture = useRef();

    const onChange = ()=>{
        myPicture.current.src = "https://img.freepik.com/premium-vector/app-development-concept-with-phone-coding-languages_23-2148698554.jpg?w=740"
    }
    return (
        <div>
            <NavBar/>
            <div className='container imgBox'>
                <img ref={myPicture} src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1699368190~exp=1699368790~hmac=05b4b82cb37629a96b58a432609af3a30531cb2bef1431eb3e95d58c453f60f6" alt="home image" />
            </div>
            <div className='btn-changeImg'>
                <button className='btn-seeMore' onClick={onChange}>See More</button>
            </div>
        </div> 
    );
};

export default Home;