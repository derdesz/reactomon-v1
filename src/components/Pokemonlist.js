
import React, { Component } from "react";
import axios from "axios";

class Pokemonlist extends Component {
  state = {
    pokemons: [],
  };


  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      this.setState({ pokemons: response.data.results });
    });
  }


  render() {
    return this.state.pokemons.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>);
  }
}

export default Pokemonlist;

