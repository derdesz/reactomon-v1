import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemonlist from './components/Pokemonlist';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Pokemonlist/>
        </Router>
    </div>
  );
}

export default App;
