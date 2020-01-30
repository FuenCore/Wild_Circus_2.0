import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
	const [ displayBurger, setDisplayBurger ] = useState({
		open: true
	});

	function displayAside() {
		setDisplayBurger({ open: !displayBurger.open });
		displayBurger.open === false
			? (document.getElementById('BurgerMenu_menu').style.marginRight = '-20vw')
			: (document.getElementById('BurgerMenu_menu').style.marginRight = '0vw')
	}

	return (
		<div className="BurgerMenu_container">
			<button className="BurgerMenu_button" onClick={displayAside}>
				>
			</button>

			<ul id="BurgerMenu_menu">
				<li className="BurgerMenu_user">
				<div className="BurgerMenu_user_img" />
				</li>
				<li className="BurgerMenu_user">
					<h3 className="BurgerMenu_user_name">FuenCore</h3>
				</li>
				<div className="BurgerMenu_navlink_container">
					<li className="BurgerMenu_navlink">Nos exploits</li>
					<li className="BurgerMenu_navlink">Notre team</li>
					<li className="BurgerMenu_navlink">Notre histoire</li>
				</div>
			</ul>
		</div>
	);
};

export default BurgerMenu;
