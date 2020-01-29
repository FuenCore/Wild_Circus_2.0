import React from "react";
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="NavBar_container">
        <ul className="NavBar_ul">
            <li className="NavBar_li">LOGO</li>
            <li className="NavBar_li">BANNER</li>
            <li className="NavBar_li">BURGER</li>
        </ul>
        </div>
    )
}

export default NavBar;