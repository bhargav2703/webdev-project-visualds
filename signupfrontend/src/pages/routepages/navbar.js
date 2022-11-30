import React from 'react';
import './navbar.css';
import { Button } from './Button';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import AboutUs from './nav-pages/aboutus';
import {Link as MyLink} from "react-scroll";

function NavBar() {
    const [click,setClick] = useState(false);
    const [disable,setDisable] = useState(false);
    // const [button,setButton] = useState(true);
    const handleClick = () => {setClick(!click);}
    const closeMobileMenu = () =>setClick(false);
    const disableButton = () =>setDisable(disable);
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
    };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
            <li className='nav-logo'>
            <Link to = "/" onClick={closeMobileMenu}>
                <h1 className='tags'>VisualDS<i className="fa-solid fa-lightbulb"></i></h1> 
            </Link>
            </li>
            <li>
                <Link to = "/"style={{ textDecoration: 'none' }} onClick={closeMobileMenu}><h3 className='tags'>Home</h3></Link>
            </li>
            <li>
                <Link to = "/about us" className='nav-item' style={{ textDecoration: 'none' }} onClick={closeMobileMenu}><h3 className='tags'>About Us</h3></Link>
            </li>
            <li>
                {/* <Link to = "dsa-cont" className='nav-item' style={{ textDecoration: 'none' }} onClick={closeMobileMenu}><h3 className='tags'>Data Structures</h3></Link> */}
                {/* <MyLink to></MyLink> */}
                <Link to='/'><h3 className='tags' style={{ textDecoration: 'none' }}>Data Structures</h3></Link>
                {/* <MyLink to="dsa-cont" spy={true} smooth={true}><h3 className='tags'>Data Structures</h3></MyLink> */}
            </li>
            {/* <li className='signup'>
                <Link to = "/signup" >
                <button disabled={disableButton} className='signup-button' to = "/signup" path = "/signup">
                    <h3>SIGN UP/SIGN IN</h3>
                </button>
                </Link>

                
            </li> */}
            <li className='signup'>
                <Link to = "/signup" >
                <button className='signup-button' to = "/login" onClick={handleLogout} path = "/signup">
                    <h3>LOGOUT</h3>
                </button>
                </Link>
                
                
            </li>
        </ul>
        {/* {button && <Button buttonStyle='btn--outline' to = '/sign-up' path = '/sign-up' onClick={()=> AboutUs()}>SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default NavBar;
