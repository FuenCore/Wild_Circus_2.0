import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth, AuthContext } from './Auth';
import BgGlitch from '../BgGlitch';
import './Login.css';

const Login = (props) => {
	const userHook = React.useContext(AuthContext);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ username, setUsername ] = useState('');
	const [ pass, setPass ] = useState('');
	const { setAuthTokens } = useAuth();
	const postLogin = () => {
		axios
			.post(`http://localhost:5000/api/auth/login`, {
				username,
				pass
			})
			.then((res) => {
				//  userHook.setAuthTokens(res.data.token);
				setAuthTokens(res.data.token);
				userHook.setUserInfo(res.data.user[0]);
				setIsLoggedIn(true);
			});
	};

	if (isLoggedIn) {
		return <Redirect to="/Main" />;
	}

	return (
		<div className="Login_container">
			
			<div className="Login_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS"/>
			</div>	
			<div className="Login_input_container">
			<div className="Login_container_title">
				<h3 className="Login_title">C0NNECTE-T0I !</h3>
			</div>	
				<input
					name="username"
					className="Login_username"
					type="username"
					placeholder="Nom de compte"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					name="password"
					className="Login_password"
					type="password"
					placeholder="Mot de passe"
					onChange={(e) => setPass(e.target.value)}
				/>
				<div className="Login_container_button">
					<button className="Login_button" onClick={() => postLogin()}>
						Connexion
					</button>
					<Link to="/main">
						<button className="Login_button_skip">Passer</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
