import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Pokemonlist extends Component {
  state = { pokemons: [] };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      this.setState({ pokemons: response.data.results });
    });
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <div key={pokemon.name}>
        <Link
          to={"pokemons/" + pokemon.url.substring(34)}
          onClick={() => this.props.handleOnClick(pokemon.url)}
        >
          {this.Capitalize(pokemon.name)}
        </Link>
        <br />
      </div>
    ));
  }
}

export default Pokemonlist;
