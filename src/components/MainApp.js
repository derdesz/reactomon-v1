import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAlert } from 'react-alert'
import Pokemonlist from "./Pokemonlist";
import Typelist from "./Typelist";
import Pokemondetail from "./Pokemondetail";
import CatchedPokemons from "./CatchedPokemons";
import FormAddPokemon from "./FormAddPokemon";
import axios from "axios";

const Containers = styled.div`
  width: 100%;                 
  overflow: hidden;            
  display: flex;                
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const catchedPokemonsList = [];


const MainApp = () =>  {
  const alert = useAlert();
    const [currentPath, setCurrentPath] = useState("");
    const [name, setname] = useState("");
    const [catchedPokemons, setCatchedPokemons] = useState([]);
    const [forReload, setForReload] = useState(true);
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonId, setPokemonId] = useState("");
    

  const handlePokemonDetailClick = (pokemon) => {
    console.log(pokemon.name)
    setPokemonData(pokemon);
    setname(pokemon.name);
    setPokemonId(pokemon.id)
    console.log(pokemonData)

  };

  useEffect(() => {}, [name])

  function clickOnCatch (pokemonName) {
    console.log("catch")
  }

  function clickOnDelete (pokemonName) {
    const index = catchedPokemonsList.indexOf(pokemonName);
    if (index > -1) {
      catchedPokemonsList.splice(index, 1);
    }
    forReload ? setForReload(false) : setForReload(true);
    
  }




    if (name === "") {
        return (
          <div className="App">
            <Router>
              <Navbar/>
              <br />
                <Route
                  path="/pokemons"
                  render={(props) => (
                    <Pokemonlist {...props} handleOnClick={handlePokemonDetailClick} clickOnCatch={clickOnCatch}/>
                  )}
                />
                <Containers>
                  <Route path="/types" component={Typelist} />
                </Containers>
                <Containers>
                  <Route path="/add-pokemon" component={FormAddPokemon} />
                </Containers>
                {/* <Containers>
                  <Route path="/catched" render={(props) => <CatchedPokemons {...props} catchedPokemonsList={catchedPokemons} clickOnDelete={clickOnDelete}/>}/>
                </Containers> */}
            </Router>
          </div>
        );
      } else return (
        <div className="App">
            <div>
            <Router>
                <Navbar/>
                <Containers>
                      <Pokemondetail pokemonData={pokemonData} clickOnCatch={clickOnCatch}/>
                </Containers>
            </Router>
        </div>
      </div>
      );

}

export default MainApp;
