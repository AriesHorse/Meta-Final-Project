import React, {useState} from 'react';
import logo from "../src/images/LL_Logo.jpg"
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // const [click, setCLick] = useState(false);

  // const handleClick = () => setCLick(!click);
  // const closeMobileMenu = () => setCLick(false);

  return (
    <>
    <nav>
        <img src={logo} alt="logo" id='logo'/>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="/order">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            </nav>
    </>
  )
}

export default Navbar;
