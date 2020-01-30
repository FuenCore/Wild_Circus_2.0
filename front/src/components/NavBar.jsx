import React from "react";
import './NavBar.css'
import BurgerMenu from "./BurgerMenu";
import Logo from "../../src/assets/hackcircus.png"

const NavBar = () => {
    return(
        <div className="NavBar_container">
        <ul className="NavBar_ul">
            <li className="NavBar_li">
                <img id="logo"src={Logo} alt="Logo"></img>
            </li>
            <li className="NavBar_li">BANNER</li>
            <li className="NavBar_li"></li>
        </ul>
        <BurgerMenu />

        </div>
    )
}

export default NavBar;