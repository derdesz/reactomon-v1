import React, { useState, useEffect } from "react";
import "../App.css";
import styled from 'styled-components';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAlert } from 'react-alert'
import Pokemonlist from "./Pokemonlist";
import Typelist from "./Typelist";
import Pokemondetail from "./Pokemondetail";
import CatchedPokemons from "./CatchedPokemons";

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
    const [currentUrl, setCurrentUrl] = useState("");
    const [catchedPokemons, setCatchedPokemons] = useState([]);
    const [forReload, setForReload] = useState(true);
    

  function handleOnClick(url) {
      if ( url === "") {
          setCurrentUrl("");
          setCurrentPath("");
      } else {
        setCurrentUrl( url );
        const path = url.substring(34);
        setCurrentPath( path );
      }
    
  };

  function clickOnCatch (pokemonName) {
    if (!catchedPokemonsList.includes(pokemonName)) {
      catchedPokemonsList.push(pokemonName);
    setCatchedPokemons(catchedPokemonsList);
    } else {
      alert.show('You already caught that Pokemon!');
    }
    
  }

  function clickOnDelete (pokemonName) {
    const index = catchedPokemonsList.indexOf(pokemonName);
    if (index > -1) {
      catchedPokemonsList.splice(index, 1);
    }
    forReload ? setForReload(false) : setForReload(true);
    
  }



  useEffect(() => {
    
  }, [currentUrl])


    if (currentUrl === "") {
        return (
          <div className="App">
            <Router>
              <Navbar handleOnClick={handleOnClick}/>
              <br />
                <Route
                  path="/pokemons"
                  render={(props) => (
                    <Pokemonlist {...props} handleOnClick={handleOnClick} clickOnCatch={clickOnCatch}/>
                  )}
                />
                <Containers>
                  <Route path="/types" component={Typelist} />
                </Containers>
                <Containers>
                  <Route path="/catched" render={(props) => <CatchedPokemons {...props} catchedPokemonsList={catchedPokemons} clickOnDelete={clickOnDelete}/>}/>
                </Containers>
            </Router>
          </div>
        );
      } else return (
        <div className="App">
            <div>
            <Router>
                <Navbar handleOnClick={handleOnClick}/>
            </Router>
            <Pokemondetail url={currentUrl} clickOnCatch={clickOnCatch}/>
        </div>
      </div>
      );

}

export default MainApp;
