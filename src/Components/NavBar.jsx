import NavBarItem from './NavBarItem';
import SignUp from './SignUp';
import Login from './Login';
const NavBar = () => {
    return (
        <div className='container navigation'>

            <div>
                <h2 className='font-color'>MTfaisal</h2>
            </div>

            <div>
                <NavBarItem/>
            </div>

            <div className='button'>
                <div><SignUp/></div>
                <div><Login/></div>
            </div>
        </div>
    );
};

export default NavBar;