import React from 'react';
import './ArtistPage.css';

const ArtistPage = () => {
	return (
		<div className="ArtistPage_container">
			Je suis une page d'artiste
			<div className="ArtistPage_select_container">
				<select name="react_clown">
					<option value="">Clown de React</option>
					<option value="dog">Exemple </option>
					<option value="cat">Exemple </option>
					<option value="hamster">Exemple </option>
					<option value="parrot">Exemple </option>
					<option value="spider">Exemple </option>
					<option value="goldfish">Exemple </option>
				</select>
				<select name="angular_clown">
					<option value="">Clown d'Angular</option>
					<option value="dog">Exemple </option>
					<option value="cat">Exemple </option>
					<option value="hamster">Exemple </option>
					<option value="parrot">Exemple </option>
					<option value="spider">Exemple </option>
					<option value="goldfish">Exemple </option>
				</select>
				<select name="php_clown">
					<option value="">Clown de PHP</option>
					<option value="dog">Exemple </option>
					<option value="cat">Exemple </option>
					<option value="hamster">Exemple </option>
					<option value="parrot">Exemple </option>
					<option value="spider">Exemple </option>
					<option value="goldfish">Exemple </option>
				</select>
			</div>
			<div className="ArtistPage_perso" />
		</div>
	);
};

export default ArtistPage;
