import React from 'react';
import './Main.css';
import HomePage from './HomePage';
import NavBar from './NavBar';
import PlacePage from './PlacePage';
import ArtistPage from './ArtistPage';
import HistoryPage from './HistoryPage';
import BgGlitch from './BgGlitch';

function Main() {
	return (
		<div className="Main">
			<div className="Main_navBar">
				<NavBar />
			</div>
			<div className="Main_BgGlitch">
				<BgGlitch />
			</div>
		<div id="Home_teleport"/>
			<HomePage />
      <div id="Place_teleport"/>
			<PlacePage />
      <div id="Team_teleport"/>
			<ArtistPage />
      <div id="History_teleport"/>
			<HistoryPage />
		</div>
    
	);
}

export default Main;
