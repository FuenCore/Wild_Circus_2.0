import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AuthContext } from './auth/Auth';
import Logout from '../assets/logout.png';
import './BurgerMenu.css';

const BurgerMenu = () => {
	const dataUser = React.useContext(AuthContext);
	const defaultAvatar = 'https://image.freepik.com/vector-gratis/payaso-aterrador-sombrero-rojo_43623-432.jpg';
	const [ authTokens, setAuthTokens ] = useState();

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
					<Link to="/Login">
						<img className="BurgerMenu_logout" src={Logout} onClick={() => destroyToken()} />
					</Link>
					<li className="BurgerMenu_user">
						<img
							className="BurgerMenu_user_img"
							src={(dataUser && dataUser.userInfo && dataUser.userInfo.avatar) || defaultAvatar}
						/>
					</li>
					<li className="BurgerMenu_user">
						<h3 className="BurgerMenu_user_name">
							{(dataUser && dataUser.userInfo && dataUser.userInfo.pseudo) || 'Stranger'}
						</h3>
					</li>
					<div className="BurgerMenu_navlink_container">
						<Link to="/main#Home_teleport">
							<li className="BurgerMenu_navlink">Page d'accueil</li>
						</Link>
						<Link to="/main#Place_teleport">
							<li className="BurgerMenu_navlink">Nos exploits</li>
						</Link>
						<Link to="/main#Team_teleport">
							<li className="BurgerMenu_navlink">Notre team</li>
						</Link>
						<Link to="/main#History_teleport">
							<li className="BurgerMenu_navlink">Notre histoire</li>
						</Link>
					</div>
				</ul>
			</AuthContext.Provider>
		</div>
	);
};

export default BurgerMenu;
