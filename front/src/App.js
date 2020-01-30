import React from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import PlacePage from "./components/PlacePage"
import ArtistPage from './components/ArtistPage';
import HistoryPage from './components/HistoryPage';
import BgGlitch from './components/BgGlitch';
import Main from "./components/Main"
import Routes from "./routes/Routes"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
