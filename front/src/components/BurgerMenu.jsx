import React, { useState } from 'react';
import { HashLink as SpaLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import { AuthContext } from './auth/Auth';
import Logout from '../assets/logout.png';
import './BurgerMenu.css';

const BurgerMenu = () => {
	const dataUser = React.useContext(AuthContext);
	const defaultAvatar = 'https://image.freepik.com/vector-gratis/payaso-aterrador-sombrero-rojo_43623-432.jpg';

	const [ displayBurger, setDisplayBurger ] = useState({
		open: true
	});

	function displayAside() {
		setDisplayBurger({ open: !displayBurger.open });
		displayBurger.open === false
			? (document.getElementById('BurgerMenu_menu').style.marginRight = '-300px')
			: (document.getElementById('BurgerMenu_menu').style.marginRight = '0vw');
		displayBurger.open === true
			? (document.getElementById('BurgerMenu').style.transform = 'rotate(180deg)')
			: (document.getElementById('BurgerMenu').style.transform = 'rotate(360deg)');
		displayBurger.open === false
			? (document.getElementById('BurgerMenu').style.marginRight = '0px')
			: (document.getElementById('BurgerMenu').style.marginRight = '300px');
	}

	const destroyToken = () => {
		localStorage.clear();
	};

	return (
		<div className="BurgerMenu_container">
			<AuthContext.Provider value={{ setAuthTokens: null }}>
				<button id="BurgerMenu" className="BurgerMenu_button" onClick={() => displayAside()}>
					>
				</button>
				<ul id="BurgerMenu_menu">
					<SpaLink to="/Login">
						<img alt="logout" className="BurgerMenu_logout" src={Logout} onClick={() => destroyToken()} />
					</SpaLink>
					<li className="BurgerMenu_user">
						<Link to ="/profile">
						<img alt="avatar"
							className="BurgerMenu_user_img"
							src={(dataUser && dataUser.userInfo && dataUser.userInfo.avatar) || defaultAvatar}
						/>
						</Link>
					</li>
					
					<li className="BurgerMenu_user">
						<h3 className="BurgerMenu_user_name">
							{(dataUser && dataUser.userInfo && dataUser.userInfo.pseudo) || 'Stranger'}
						</h3>
					</li>
					<div className="BurgerMenu_navlink_container">
						<SpaLink to="/main#Home_teleport">
							<li className="BurgerMenu_navlink">Page d'accueil</li>
						</SpaLink>
						<SpaLink to="/main#Place_teleport">
							<li className="BurgerMenu_navlink">Nos exploits</li>
						</SpaLink>
						<SpaLink to="/main#Team_teleport">
							<li className="BurgerMenu_navlink">Notre team</li>
						</SpaLink>
						<SpaLink to="/main#History_teleport">
							<li className="BurgerMenu_navlink">Notre histoire</li>
						</SpaLink>
					</div>
				</ul>
			</AuthContext.Provider>
		</div>
	);
};

export default BurgerMenu;
