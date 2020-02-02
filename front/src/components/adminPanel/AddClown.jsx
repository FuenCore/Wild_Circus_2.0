import React from "react";
import "./AddClown.css";
import BgGlitch from "../BgGlitch";
import { Link } from "react-router-dom";

const AddClown = () => {
 return (
			<div className="AddClown_container">
				{/* <div className="AddClown_BgGlitch">
					<BgGlitch title="Voici ta page perso" glitch="_________" />
				</div>
				<Link to="/Main"><button id="Return_button" type="submit" name="return">Retour</button></Link>
				<div className="AddClown_input_container">
					<img alt="AddClown_user_avatar" className="AddClown_user_img" src={avatar.url || defaultAvatar} />
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
						className="AddClown_username"
						type="text"
						placeholder="Prénom"
						onChange={(e) => setFirstname(e.target.value)}
					/>
					<input
						name="lastname"
						className="AddClown_username"
						type="text"
						placeholder="Nom"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<input
						name="pseudo"
						className="AddClown_username"
						type="text"
						placeholder="Pseudo"
						onChange={(e) => setPseudo(e.target.value)}
					/>
					<input
						name="password"
						className="AddClown_password"
						type="password"
						placeholder="Mot de passe"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className="AddClown_container_button">
						<button className="AddClown_button" onClick={() => whatMustBeSend()}>
							Enregistrer
						</button>
					</div>
				</div> */}
			</div>
	);
}


export default AddClown;