import React from 'react';
import logo from "../src/images/LL_Logo.jpg"
import {Routes, Route} from "react-router-dom"
import HomePage from "../src/components/pages/Home"
import Reservation from "../src/components/pages//Reservations"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" id='logo'/>
            
                <li><a href={HomePage}></a>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li><a href="../src/components/pages/Reservations">Reservations</a></li>
                <li>Order Online</li>
                <li>Login</li>
              
            
        </header>

        

    );
}
/* I don't know what to put here yet... */

export default Header;