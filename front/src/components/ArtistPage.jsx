import React, { useState } from 'react';
import './ArtistPage.css';

const ArtistPage = () => {

    const [ displayClowns, setDisplayClowns ] = useState({
        modalOne: false,
        modalTwo: false,
        modalThree: false
    })

    const displayClownsOne = () => {
        setDisplayClowns({ modalOne: !displayClowns.modalOne});
        (displayClowns.modalOne === true) ?
        document.getElementById('ClownOne').style.display = 'none'
        :
        document.getElementById('ClownOne').style.display = "block"
    }

    const displayClownsTwo = () => {
        setDisplayClowns({ modalTwo: !displayClowns.modalTwo});
        (displayClowns.modalTwo === true) ?
        document.getElementById('ClownTwo').style.display = 'none'
        :
        document.getElementById('ClownTwo').style.display = 'block'
    }

    const displayClownsThree = () => {
        setDisplayClowns({ modalThree: !displayClowns.modalThree});
        (displayClowns.modalThree === true) ?
        document.getElementById('ClownThree').style.display = 'none'
        :
        document.getElementById('ClownThree').style.display = "block";
    }

	return (
		<div className="ArtistPage_container">
			Je suis une page d'artiste
			<div className="ArtistPage_select_container">
				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" name="react_clown" onClick={() => displayClownsOne()}>
						Montrer les clowns
					</button>
					
                    <div id="ClownOne" className="ArtistPage_artist_container">
					<div className="ArtistPage_artist">
					<div className="ArtistPage_img"></div>
					<div className="ArtistPage_info">
					<p className="ArtistPage_name">JSON, 19 ans</p>
					<p className="ArtistPage_benef">Braqueur $420.000</p>
					</div>
					</div>
					
					<div className="ArtistPage_artist">
					<div className="ArtistPage_img"></div>
					<div className="ArtistPage_info">
					<p className="ArtistPage_name">JSON, 19 ans</p>
					<p className="ArtistPage_benef">Braqueur $420.000</p>
					</div>
					</div>
					
                    </div>
				</div>

				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" name="angular_clown" onClick={() => displayClownsTwo()}>
						Montrer les clowns
					</button>
                    <div id="ClownTwo" className="ArtistPage_artist_container">
					<div className="ArtistPage_artist">Exemple</div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
                    </div>
				</div>

				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" name="php_clown" onClick={() => displayClownsThree()}>
						Montrer les clowns
					</button>
                    <div id="ClownThree" className="ArtistPage_artist_container">
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
					<div className="ArtistPage_artist">Exemple </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default ArtistPage;
