import React from 'react';
import '../CSS/NavBar.css';
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png'; 
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'> 
            <Link to="/WelcomeMessage" className="logo">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
        </div>
        <div className='pagelink-container'> 
            <Link to="/Landscape" className="link-name">
                Landscape
            </Link>
            <Link to="/Car" className="link-name">
                Car
            </Link>
            <Link to="/Portrait" className="link-name">
                Portrait
            </Link>
            <Link to="/PhotoGenerator" className="link-name">
                Search
            </Link>
            <Link to="/ContactMe" className="link-name">
                Contact Me
            </Link>
        </div>
        <div className='shopping-cart-container'> 
            <Link to="/Shop" className='cart-icon'>
                <BsCart3 />
            </Link>
        </div>
    </div>
  );
}

export default Navbar;
