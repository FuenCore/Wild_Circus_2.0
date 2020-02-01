import React from 'react';
import './Profile.css';

const Profile = () => {
	return (
		<div className="Profile_container">
			Je suis un componsant Profile
			<div className="Login_input_container">
				<h3 className="Login_title">Connecte-toi !</h3>
				<input name="username" className="Login_username" type="username" placeholder="Nom de compte" />
				<input name="password" className="Login_password" type="password" placeholder="Mot de passe" />
				<div className="Login_container_button">
					<button className="Login_button">Connexion</button>
					<button className="Login_button_skip">Passer</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
