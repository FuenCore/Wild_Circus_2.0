import React, { useState, useEffect } from 'react';
import { storage } from '../firebase/Config';
import './Profile.css';
import { useAuth, AuthContext } from './auth/Auth';
import Axios from 'axios';
import ProfileContext from './ProfileContext';
import { Redirect } from 'react-router-dom';
import BgGlitch from './BgGlitch';

const Profile = () => {
	const submitProfile = () => {
		Axios.put(`http://localhost:5000/api/user/update/${dataUser && dataUser.userInfo && dataUser.userInfo.id}`, {
			firstname: firstname ? firstname : dataUser.firstname,
			lastname: lastname ? lastname : dataUser.lastname,
			pseudo: pseudo ? pseudo : dataUser.pseudo,
			password: password,
			avatar: avatar ? avatar : dataUser.avatar
		});
	};

	const submitAvatar = () => {
		const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar);
		uploadTask.on(
			'state_changed',
			(snapshop) => {
				// progress function
			},
			(error) => {
			 console.log('error', error);
			},
			() => {
				// complete function ...
				storage.ref('images').child(avatar.name).getDownloadURL().then(url => {
					setAvatar({ url: url });
					Axios.put(
						`http://localhost:5000/api/user/update/${dataUser &&
							dataUser.userInfo &&
							dataUser.userInfo.id}`,
						{
							avatar: url
						}
					).then(	userHook.setUserInfo(null))
					.then(setIsSubmit(true));
				});
			}
		);
	};

	const whatMustBeSend = () => {
		avatar.name && avatar.url === null ? submitProfile() : submitAvatar();
		submitProfile();
	};

	const dataUser = React.useContext(AuthContext);
	const defaultAvatar =
		(dataUser && dataUser.userInfo && dataUser.userInfo.avatar) ||
		'https://image.freepik.com/vector-gratis/payaso-aterrador-sombrero-rojo_43623-432.jpg';

	const userHook = React.useContext(AuthContext);
	const [ dataProfile, setDataProfile ] = useState();
	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastName ] = useState('');
	const [ pseudo, setPseudo ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isSubmit, setIsSubmit ] = useState(false);
	const [ avatar, setAvatar ] = useState({
		name: null,
		url: null
	});


	if (isSubmit) {
		return <Redirect to="/Login" />;
	}
	return (
		<ProfileContext.Provider value={{ dataProfile }}>
			<div className="Profile_container">
				<div className="Profile_BgGlitch">
					<BgGlitch title="Voici ta page perso" glitch="_________" />
				</div>
				<div className="Profile_input_container">
					<img className="Profile_user_img" src={avatar.url || defaultAvatar} />
					<div class="upload-btn-wrapper">
						<button class="btn">Modifier avatar</button>
						<input
							type="file"
							name="name"
							accept="image/jpeg, image/png"
							onChange={(e) => setAvatar(e.target.files[0])}
						/>
					</div>
					<input
						name="firstname"
						className="Profile_username"
						type="text"
						placeholder="Prénom"
						onChange={(e) => setFirstname(e.target.value)}
					/>
					<input
						name="lastname"
						className="Profile_username"
						type="text"
						placeholder="Nom"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<input
						name="pseudo"
						className="Profile_username"
						type="text"
						placeholder="Pseudo"
						onChange={(e) => setPseudo(e.target.value)}
					/>
					<input
						name="password"
						className="Profile_password"
						type="password"
						placeholder="Mot de passe"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className="Profile_container_button">
						<button className="Profile_button" onClick={() => whatMustBeSend()}>
							Enregistrer
						</button>
					</div>
				</div>
			</div>
		</ProfileContext.Provider>
	);
};

export default Profile;
