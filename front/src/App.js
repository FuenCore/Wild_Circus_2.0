import React from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import PlacePage from "./components/PlacePage"
import ArtistPage from './components/ArtistPage';
import HistoryPage from './components/HistoryPage';
import BgGlitch from './components/BgGlitch';

function App() {
  return (
    <div className="App">
      <div className="App_navBar">
      <NavBar />
      </div>
      <div className="App_BgGlitch">
      <BgGlitch />
      </div>
      <HomePage />
      <PlacePage />
      <ArtistPage />
      <HistoryPage />
    </div>
  );
}

export default App;
