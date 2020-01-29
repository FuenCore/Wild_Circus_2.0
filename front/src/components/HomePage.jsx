import React from 'react';
import './HomePage.css';
import Bg from "../assets/clown.png"

const HomePage = () => {
	return (
		<div className="HomePage_container">
			Je suis une page home
			<img
				className="HomePage_img_clown"
				src={Bg}
			/>

		</div>
	);
};

export default HomePage;
