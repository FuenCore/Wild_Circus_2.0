import React from "react";
import './NavBar.css'
import BurgerMenu from "./BurgerMenu";
import Logo from "../../src/assets/hackcircus.png"
import { AuthContext } from "./auth/Auth"

const NavBar = () => {

	const dataUser = React.useContext(AuthContext);


    return(
        <div className="NavBar_container">
        <ul className="NavBar_ul">
            <li className="NavBar_li">
                <img id="logo"src={Logo} alt="Logo"></img>
            </li>
            <li className="NavBar_li">Bienvenue à toi <strong id="NavBar_strong">{dataUser && dataUser.userInfo && dataUser.userInfo.firstname || "Clown"} {dataUser && dataUser.userInfo && dataUser.userInfo.lastname || "Etranger"}</strong></li>
            <li className="NavBar_li" id="NavBar_button"></li>
        </ul>
        <BurgerMenu />

        </div>
    )
}

export default NavBar;