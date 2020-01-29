import React from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import PlacePage from "./components/PlacePage"
import ArtistPage from './components/ArtistPage';
import HistoryPage from './components/HistoryPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <PlacePage />
      <ArtistPage />
      <HistoryPage />
    </div>
  );
}

export default App;
