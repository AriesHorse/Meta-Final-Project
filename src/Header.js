import React from 'react';
import logo from "../src/images/LL_Logo.jpg"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" id='logo'/>
            
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            
        </header>

    );
}
/* I don't know what to put here yet... */

export default Header;