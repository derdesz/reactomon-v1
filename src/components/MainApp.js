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



  }

  function clickOnCatch (pokemonName) {
      axios.post(`http://localhost:8082/pokemons/catch/${pokemonName}`);
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

                  <Route path="/catched" render={(props) => <CatchedPokemons {...props} catchedPokemonsList={catchedPokemons}/>}/>

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
