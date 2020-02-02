import React, { useEffect, useState } from 'react';
import { AuthContext } from '../auth/Auth';
import './UserList.css';
import BgGlitch from '../BgGlitch';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const UserList = () => {
	const dataUser = React.useContext(AuthContext);
	const [ isSubmit, setIsSubmit ] = useState(false);
	const [ place, setPlace ] = useState([]);
	const [ newPlace, setNewPlace ] = useState();
    const [ newName, setNewName ] = useState();
    const [ newPseudo, setPseudo ] = useState() 
	const [ newImage, setNewImage ] = useState();
	const [ needDelete, setNeedDelete ] = useState(null);


	const removePlace = () => {
		Axios.delete(`http://localhost:5000/api/user/${needDelete}`).then(setIsSubmit(true));
	};
	useEffect(() => {
		Axios.get('http://localhost:5000/api/user').then((res) => res.data).then((data) => setPlace(data));
	}, []);

	if (isSubmit) {
		return <Redirect to="/Admin" />;
	}

	if (needDelete != null) {
		return removePlace();
	}

	return (
		<div className="UserList_container">
			<div className="Login_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS" />
			</div>
			<Link to="/Admin">
				<button id="Return_button" type="submit" name="return">
					Retour
				</button>
			</Link>
			<div className="UserList_box">
				<ul className="UserList_ul">
					{place.map((x) => (
						<li className="UserList_li" key={x.id} value={x.id}>
							<button id="UserList_button" type="submit" onClick={() => setNeedDelete(x.id)}>
								Remove
							</button>
							<img className="UserList_img" src={x.avatar} />
							<div className="UserList_info_container">
								<p className="UserList_name">{x.pseudo}</p>
								<p className="UserList_place">{x.username}</p>
							</div>
						</li>
					))}
				</ul>
				</div>
                </div>
	);
};

export default UserList;
