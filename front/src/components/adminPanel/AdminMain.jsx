import React from 'react';
import './AdminMain.css';
import NavBar from '../NavBar';
import BgGlitch from '../BgGlitch';
import { Link } from 'react-router-dom';

const AdminMain = () => {
	return (
		<div className="AdminMain">
			<div className="AdminMain_navBar">
				<NavBar />
			</div>
			<div className="AdminMain_BgGlitch">
				<BgGlitch glitch="Hi_Admin" />
			</div>
			<div className="AdminMain_input_container">
				<div className="AdminMain_container_button">
					<Link to="/AddPlace">
						<button className="AdminMain_button">Editer nos exploits</button>
					</Link>
					<Link to="/AddClown">
						<button className="AdminMain_button">Editer notre team</button>
					</Link>
					<Link to="/AddHistory">
						<button className="AdminMain_button">Editer notre histoire</button>
					</Link>
					<Link to="/UserList">
						<button className="AdminMain_button">Editer les utilisateurs</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AdminMain;
