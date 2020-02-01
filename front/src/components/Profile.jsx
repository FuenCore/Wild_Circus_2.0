import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useAuth, AuthContext } from './auth/Auth';
import Axios from 'axios';
import ProfileContext from './ProfileContext';
import { Redirect } from 'react-router-dom';

const Profile = () => {


    const submitProfile = () => {
        Axios.put(`http://localhost:5000/api/user/update/${dataUser && dataUser.userInfo && dataUser.userInfo.id}`, {
            firstname: firstname ? firstname : dataUser.firstname,
            lastname: lastname ? lastname : dataUser.lastname,
            pseudo: pseudo ? pseudo : dataUser.pseudo,
            password: password
        }).then(setIsSubmit(true))
    }

	const dataUser = React.useContext(AuthContext);
    const defaultAvatar = 'https://image.freepik.com/vector-gratis/payaso-aterrador-sombrero-rojo_43623-432.jpg';


    const [dataProfile, setDataProfile ] = useState()
    const [firstname, setFirstname ] = useState('')
    const [lastname, setLastName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [ isSubmit, setIsSubmit ] = useState(false)

    if (isSubmit) {
		return <Redirect to="/Login" />;
	}

    // function fetchData() {
    //     Axios
    //       .get(`http://localhost:5000/api/user/update/${dataUser.id}`)
    //       .then(res => res.data)
    //       .then(data => setDataProfile(data));
    //   }
    
    //   useEffect(() => {
    //     fetchData();
    //     // Do not delete comments under this comments it helps to vaoid a temporarly problem in react with calling function inside useEffect
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, []);


	return (
        <ProfileContext.Provider value={{ dataProfile }}>
		<div className="Profile_container">
			<div className="Profile_input_container">
				<img
					className="Profile_user_img"
					src={(dataUser && dataUser.userInfo && dataUser.userInfo.avatar) || defaultAvatar}
				/>
				<input name="firstname" className="Profile_username" type="text" placeholder="Prénom" onChange={(e) => setFirstname(e.target.value)}/>
				<input name="lastname" className="Profile_username" type="text" placeholder="Nom" onChange={(e) => setLastName(e.target.value)}/>
				<input name="pseudo" className="Profile_username" type="text" placeholder="Pseudo" onChange={(e) => setPseudo(e.target.value)}/>
				<input name="password" className="Profile_password" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>

				<div className="Profile_container_button">
					<button className="Profile_button" onClick={() => submitProfile()}>Enregistrer</button>
                    {/* onclick="setTimeout('window.alert('Hello!')', 2000)" /> */}

				</div>
			</div>
		</div>
        </ProfileContext.Provider>
	);
};

export default Profile;
