import React from 'react';
import './HomePage.css';
import Bg from '../assets/clown.png';

const HomePage = () => {
	return (
		<div className="HomePage_container">
			. <img className="HomePage_img_clown" src={Bg} alt="Background" id="HomePage_img" />
		</div>
	);
};

export default HomePage;
