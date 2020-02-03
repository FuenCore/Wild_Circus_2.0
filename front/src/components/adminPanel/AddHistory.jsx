import React, { useEffect, useState } from 'react';
import { AuthContext } from '../auth/Auth';
import './AddHistory.css';
import BgGlitch from '../BgGlitch';
import Axios from 'axios';
import { Redirect, Link } from "react-router-dom";

const AddHistory = () => {
	const dataUser = React.useContext(AuthContext);
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ history, setHistory ] = useState([]);
    const [ newPlace, setNewPlace ] = useState()
    const [ newDate, setNewDate ] = useState()
    const [ newImage, setNewImage ] = useState();
    const [ newText, setNewText ] = useState()
    const [ needDelete, setNeedDelete ] = useState(null)
    
    const submitPlace = () => {
		Axios.post(`http://localhost:5000/api/history`, {
            place: newPlace,
            date: newDate,
            image: newImage,
            text: newText
		}).then(setIsSubmit(true))
	};

    const removePlace = () => {
        Axios.delete(`http://localhost:5000/api/history/${needDelete}`).then(setIsSubmit(true))
    }
	useEffect(() => {
		Axios.get('http://localhost:5000/api/history').then((res) => res.data).then((data) => setHistory(data));
	}, []);


	if (isSubmit) {
		return <Redirect to="/Admin" />;
    }
    
    if(needDelete != null) {
        return removePlace();
    }

	return (
		<div className="AddHistory_container">
			<div className="Login_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="WILD_CIRCUS" />
			</div>
            <Link to="/Admin"><button id="Return_button" type="submit" name="return">Retour</button></Link>
			<div className="AddHistory_box">
				<ul className="AddHistory_ul">
					{history.map((x) => (
						<li className="AddHistory_li" key={x.id} value={x.id}>
							<button id="AddHistory_button" type="submit" onClick={() => setNeedDelete(x.id)}>
								Remove
							</button>
							<img className="AddHistory_img" src={x.image} />
							<div className="AddHistory_info_container">
								<p className="AddHistory_name" >
									{x.place}
								</p>
								<p className="AddHistory_place">
									{x.date}
								</p>
                                <p className="AddHistory_place">
									{x.text}
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="AddHistory_box2">
					<li className="AddHistory_li">
						<div className="AddHistory_info_container">
                        <input
								type="text"
								className="AddHistory_name_1"
								placeholder="Entrer un lien d'image"
								onChange={(e) => setNewImage(e.target.value)}
							/>
							<input
								type="number"
								className="AddHistory_name_1"
								placeholder="Entrer une année"
								onChange={(e) => setNewDate(e.target.value)}
							/>
							<input
								type="text"
								className="AddHistory_place_1"
								placeholder="Entrer un lieu"
								onChange={(e) => setNewPlace(e.target.value )}
							/>
                            	<textarea
								id="AddHistory_text"
								placeholder="Entrer une description"
								onChange={(e) => setNewText(e.target.value )}
							/>
						</div>
					</li>
				</div>
				<button className="AddHistory_submit_btn" type="submit" onClick={() => submitPlace()}>Enregistrer les modifications</button>
			</div>
		</div>
	);
};

export default AddHistory;
