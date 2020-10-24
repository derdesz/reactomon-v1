import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { useHistory, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemonlist from "./Pokemonlist";
import Typelist from "./Typelist";
import Pokemondetail from "./Pokemondetail";

const MainApp = () =>  {
    const [currentPath, setCurrentPath] = useState("");
    const [currentUrl, setCurrentUrl] = useState("");

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
                    <Pokemonlist {...props} handleOnClick={handleOnClick} />
                  )}
                />
                <Route path="/types" component={Typelist} />
            </Router>
          </div>
        );
      } else return (
        <div className="App">
            <div>
            <Router>
                <Navbar handleOnClick={handleOnClick}/>
            </Router>
            <Pokemondetail url={currentUrl} />
        </div>
      </div>
      );

}

export default MainApp;
