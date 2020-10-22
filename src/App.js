import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemonlist from './components/Pokemonlist';
import Typelist from './components/Typelist';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Route path='/pokemons' component={Pokemonlist}/>
            <Route path='/types' component={Typelist}/>
        </Router>
    </div>
  );
}

export default App;
