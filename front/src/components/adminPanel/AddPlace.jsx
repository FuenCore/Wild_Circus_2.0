import React, { useEffect, useState } from 'react';
import { AuthContext } from '../auth/Auth';
import './AddPlace.css';
import BgGlitch from '../BgGlitch';
import Axios from 'axios';
import { Redirect, Link } from "react-router-dom";

const AddPlace = () => {
	const dataUser = React.useContext(AuthContext);
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ place, setPlace ] = useState([]);
    const [ newPlace, setNewPlace ] = useState()
    const [ newName, setNewName ] = useState()
    const [ newImage, setNewImage ] = useState();
    const [ needDelete, setNeedDelete ] = useState(null)
    
    const submitPlace = () => {
		Axios.post(`http://localhost:5000/api/exploit`, {
            place: newPlace,
            name: newName,
            image: newImage
		}).then(setIsSubmit(true))
	};

    const removePlace = () => {
        Axios.delete(`http://localhost:5000/api/exploit/${needDelete}`).then(setIsSubmit(true))
    }
	useEffect(() => {
		Axios.get('http://localhost:5000/api/exploit').then((res) => res.data).then((data) => setPlace(data));
	}, []);


	if (isSubmit) {
		return <Redirect to="/Admin" />;
    }
    
    if(needDelete != null) {
        return removePlace();
    }

	return (
		<div className="AddPlace_container">
			<div className="Login_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS" />
			</div>
            <Link to="/Admin"><button id="Return_button" type="submit" name="return">Retour</button></Link>
			<div className="AddPlace_box">
				<ul className="AddPlace_ul">
					{place.map((x) => (
						<li className="AddPlace_li" key={x.id} value={x.id}>
							<button id="AddPlace_button" type="submit" onClick={() => setNeedDelete(x.id)}>
								Remove
							</button>
							<img className="AddPlace_img" src={x.image} />
							<div className="AddPlace_info_container">
								<p className="AddPlace_name" >
									{x.name}
								</p>
								<p className="AddPlace_place">
									{x.place}
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="AddPlace_box2">
					<li className="AddPlace_li">
						<div className="AddPlace_info_container">
                        <input
								type="text"
								className="AddPlace_name_1"
								placeholder="Entrer un lien d'image"
								onChange={(e) => setNewImage(e.target.value)}
							/>
							<input
								type="text"
								className="AddPlace_name_1"
								placeholder="Entrer un nom"
								onChange={(e) => setNewName(e.target.value)}
							/>
							<input
								type="text"
								className="AddPlace_place_1"
								placeholder="Entrer un lieu"
								onChange={(e) => setNewPlace(e.target.value )}
							/>
						</div>
					</li>
				</div>
				<button className="AddPlace_submit_btn" type="submit" onClick={() => submitPlace()}>Enregistrer les modifications</button>
			</div>
		</div>
	);
};

export default AddPlace;
