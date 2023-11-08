import {NavLink} from 'react-router-dom';


const NavBarItem = () => {
    return (

        <div className='navListWithHeader'>
            
            <ul className='navigatinList'>
                <li><NavLink to ='/' className={({isActive})=>isActive?"navListActive":"navListInActive"}>Home</NavLink></li>
                <li><NavLink to ='/About' className={({isActive})=>isActive?"navListActive":"navListInActive"}>About</NavLink></li>
                <li><NavLink to ='/Service' className={({isActive})=>isActive?"navListActive":"navListInActive"}>Services</NavLink></li>
                <li><NavLink to ='/Project' className={({isActive})=>isActive?"navListActive":"navListInActive"}>Projects</NavLink></li>
                <li><NavLink to ='/Blog' className={({isActive})=>isActive?"navListActive":"navListInActive"}>Blogs</NavLink></li>
                <li><NavLink to ='/Contact'className={({isActive})=>isActive?"navListActive":"navListInActive"} >Contact</NavLink></li>

            </ul>
        </div>
    );
};

export default NavBarItem;