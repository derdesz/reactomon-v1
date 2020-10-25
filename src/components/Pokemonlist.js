import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemonlist = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let content = pokemons.map((pokemon) => (
    <div key={pokemon.name}>
      <Link
        to={"pokemons/" + pokemon.url.substring(34)}
        onClick={() => props.handleOnClick(pokemon.url)}
      >
        {Capitalize(pokemon.name)}
      </Link>
      <br />
    </div>
  ));

  return content;
};

export default Pokemonlist;
