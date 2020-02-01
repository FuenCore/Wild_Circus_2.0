import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import  AuthContext from './Auth';
import './Login.css';

const Login = ({ dispatch }, props) => {
  const userHook = React.useContext(AuthContext);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ username, setUsername ] = useState('');
	const [ pass, setPass ] = useState('');
	// const { setAuthTokens } = useAuth();


	const postLogin = () => {
		axios
			.post(`http://localhost:5000/api/auth/login`, {
				username,
				pass
			})
			.then((res) => {
         userHook.setAuthTokens(res.data.token);
		 userHook.setUserInfo(res.data.user[0])
		setIsLoggedIn(true);
      })
  };

	if (isLoggedIn) {
		return <Redirect to="/Main" />;
	}
	return (
		<div className="Login_container">
			<div className="Login_input_container">
				<h3 className="Login_title">Connecte-toi !</h3>
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
				<button className="Login_button" onClick={() => postLogin()}>
					Connexion
				</button>
			</div>
		</div>
	);
};

export default Login;
