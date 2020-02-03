import React, { useState, useEffect } from "react";
import "./AddClown.css";
import BgGlitch from "../BgGlitch";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios"
import { AuthContext } from '../auth/Auth';


const AddClown = () => {

	const dataUser = React.useContext(AuthContext);
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ clown, setClown ] = useState([]);
	const [ newRole, setNewRole ] = useState()
	const [ newOrigin, setNewOrigin ] = useState()
    const [ newPseudo, setNewPseudo ] = useState()
	const [ newAvatar, setNewAvatar ] = useState();
	const [ newAge, setNewAge ] = useState();
    const [ needDelete, setNeedDelete ] = useState(null)
    
    const submitPlace = () => {
		Axios.post(`http://localhost:5000/api/clown/`, {
			pseudo: newPseudo,
			role: newRole,
			origin: newOrigin,
			age: newAge,
			avatar: newAvatar
		}).then(setIsSubmit(true))
	};

    const removePlace = () => {
        Axios.delete(`http://localhost:5000/api/clown/${needDelete}`).then(setIsSubmit(true))
    }
	useEffect(() => {
		Axios.get('http://localhost:5000/api/clown').then((res) => res.data).then((data) => setClown(data));
	}, []);

	if (isSubmit) {
		return <Redirect to="/Admin" />;
    }
    
    if(needDelete != null) {
        return removePlace();
	}
	
	return (
		<div className="AddClown_container">
			<div className="Login_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS" />
			</div>
            <Link to="/Admin"><button id="Return_button" type="submit" name="return">Retour</button></Link>
			<div className="AddClown_box">
				<ul className="AddClown_ul">
					{clown.map((x) => (
						<li className="AddClown_li" key={x.id} value={x.id}>
							<button id="AddClown_button" type="submit" onClick={() => setNeedDelete(x.id)}>
								Remove
							</button>
							<img className="AddClown_img" src={x.avatar} />
							<div className="AddClown_info_container">
								<p className="AddClown_name" >
									Pseudo : {x.pseudo}
								</p>
								<p className="AddClown_place">
									Role :  {x.role}
								</p>
								<p className="AddClown_place">
									Origin :  {x.origin}
								</p>
								<p className="AddClown_place">
									Age :  {x.age}
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="AddClown_box2">
					<li className="AddClown_li">
						<div className="AddClown_info_container">
						<select id="AddClown_select" onChange={(e) => setNewRole(e.target.value)}>
								<option id='AddClown_option'>Choisir le rôle</option>
								<option value="Braqueur" id='AddClown_option'>Braqueur</option>
								<option value="Hackeur" id='AddClown_option'>Hackeur</option>
								<option value="Clown de main" id='AddClown_option' value="Clown de main" >Clown de main</option>
							</select>
                        <input
								type="text"
								className="AddClown_name_1"
								placeholder="Entrer un lien d'image"
								onChange={(e) => setNewAvatar(e.target.value)}
							/>
							<input
								type="text"
								className="AddClown_name_1"
								placeholder="Entrer un Pseudo"
								onChange={(e) => setNewPseudo(e.target.value)}
							/>
							<input
								type="text"
								className="AddClown_place_1"
								placeholder="Entrer une origine"
								onChange={(e) => setNewOrigin(e.target.value )}
							/>
							<input
								type="number"
								className="AddClown_place_1"
								placeholder="Entrer un age"
								onChange={(e) => setNewAge(e.target.value )}
							/>
						</div>
					</li>
				</div>
				<button className="AddClown_submit_btn" type="submit" onClick={() => submitPlace()}>Enregistrer les modifications</button>
			</div>
		</div>
	);
}

export default AddClown;