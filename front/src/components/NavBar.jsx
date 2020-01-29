import React from "react";
import './NavBar.css'
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    return(
        <div className="NavBar_container">
        <ul className="NavBar_ul">
            <li className="NavBar_li">LOGO</li>
            <li className="NavBar_li">BANNER</li>
            <li className="NavBar_li">Oui</li>
        </ul>
        <BurgerMenu />

        </div>
    )
}

export default NavBar;