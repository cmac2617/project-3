import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component { 
    render() {
        return(
            <div>
            <nav className="NavbarItems">
                <h1 className="Navbar-logo"> FunFinder </h1>
                <div>
                <ul>
                   <li className="listitems"> <a href="#"></a> Home</li>
                   <li className="listitems"> <a href="#"></a> About</li>
                   <li className="listitems"> <a href="#"></a> Contact</li>
                   <li className="listitems"> <a href='/Register/register.js'></a> Register</li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }

}
 export default Navbar