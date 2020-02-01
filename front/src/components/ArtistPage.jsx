import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ArtistPage.css';

const ArtistPage = () => {
	const [ displayClowns, setDisplayClowns ] = useState({
		modalOne: false,
		modalTwo: false,
		modalThree: false
	});

	const displayClownsOne = () => {
		setDisplayClowns({ modalOne: !displayClowns.modalOne });
		displayClowns.modalOne === true
			? (document.getElementById('ClownOne').style.display = 'none')
			: (document.getElementById('ClownOne').style.display = 'block');
	};

	const displayClownsTwo = () => {
		setDisplayClowns({ modalTwo: !displayClowns.modalTwo });
		displayClowns.modalTwo === true
			? (document.getElementById('ClownTwo').style.display = 'none')
			: (document.getElementById('ClownTwo').style.display = 'block');
	};

	const displayClownsThree = () => {
		setDisplayClowns({ modalThree: !displayClowns.modalThree });
		displayClowns.modalThree === true
			? (document.getElementById('ClownThree').style.display = 'none')
			: (document.getElementById('ClownThree').style.display = 'block');
	};

	// RECUPERATION DES BRAQUEURS

	const [ braqueur, setBraqueur ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/clown/braqueur').then((res) => res.data).then((data) => setBraqueur(data));
	}, []);

	// RECUPERATION DES HACKERS

	const [ hacker, setHacker ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/clown/hackeur').then((res) => res.data).then((data) => setHacker(data));
	}, []);

	// RECUPERATION DES CLOWNS DE MAIN

	const [ soldier, setSoldier ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/clown/soldier').then((res) => res.data).then((data) => setSoldier(data));
	}, []);

	return (
		<div className="ArtistPage_container">
			<div className="ArtistPage_select_container">
				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" onClick={() => displayClownsOne()}>
						🤡 LES BRAQUEURS
					</button>

					<div id="ClownOne" className="ArtistPage_artist_container">
						{braqueur.map((x) => (
							<div className="ArtistPage_artist">
								<img className="ArtistPage_img" src={x.avatar} />
								<div className="ArtistPage_info">
									<p className="ArtistPage_name">
										{x.pseudo}, {x.age} ans
									</p>
									<p className="ArtistPage_origin">Origine: {x.origin} </p>
									<p className="ArtistPage_benef">Gains: {x.gain}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" onClick={() => displayClownsTwo()}>
						🤡 LES HACKERS
					</button>
					<div id="ClownTwo" className="ArtistPage_artist_container">
					{hacker.map((x) => (
							<div className="ArtistPage_artist">
								<img className="ArtistPage_img" src={x.avatar} />
								<div className="ArtistPage_info">
									<p className="ArtistPage_name">
										{x.pseudo}, {x.age} ans
									</p>
									<p className="ArtistPage_origin">Origine: {x.origin}</p>
									<p className="ArtistPage_benef">Gains: {x.gain} </p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="ArtistPage_container_clowns">
					<button className="ArtistPage_button" onClick={() => displayClownsThree()}>
						🤡 LES CLOWNS DE MAIN
					</button>
					<div id="ClownThree" className="ArtistPage_artist_container">
					{soldier.map((x) => (
							<div className="ArtistPage_artist">
								<img className="ArtistPage_img" src={x.avatar} />
								<div className="ArtistPage_info">
									<p className="ArtistPage_name">
										{x.pseudo}, {x.age} ans
									</p>
									<p className="ArtistPage_origin">Origine: {x.origin}</p>
									<p className="ArtistPage_benef">Gains: {x.gain} </p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistPage;
