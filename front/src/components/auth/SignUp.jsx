import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth, AuthContext } from './Auth';
import BgGlitch from '../BgGlitch';
import './SignUp.css';

const SignUp = () => {
	const [ isSubmit, setIsSubmit ] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ pseudo, setPseudo ] = useState('')
	const [ pass, setPass ] = useState('');
    
	const postSignUp = () => {
		axios
			.post(`http://localhost:5000/api/auth/signup`, {
                pseudo,
                username,
				pass
			})
			.then(() => {
				setIsSubmit(true);
			});
	};

	if (isSubmit) {
		return <Redirect to="/Login" />;
	}

	return (
		<div className="SignUp_container">
			<div className="SignUp_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS" />
			</div>
            <Link to="/Login"><button id="Return_button" type="submit" name="return">Retour</button></Link>

			<div className="SignUp_input_container">
				<div className="SignUp_container_title">
					<h3 className="SignUp_title">INSCRIT-T0I ! !</h3>
				</div>
				<input
					name="pseudo"
					className="SignUp_username"
					type="pseudo"
					placeholder="Pseudo"
					onChange={(e) => setPseudo(e.target.value)}
				/>
				<input
					name="username"
					className="SignUp_username"
					type="username"
					placeholder="Nom de compte"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					name="password"
					className="SignUp_password"
					type="password"
					placeholder="Mot de passe"
					onChange={(e) => setPass(e.target.value)}
				/>

				<div className="SignUp_container_button">
					<Link to="/signup">
						<button className="SignUp_button" onClick={() => postSignUp()}>S'inscrire</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
