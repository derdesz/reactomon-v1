import React, { Component } from "react";
import axios from "axios";

class Pokemondetail extends Component {
  state = {
    name: "",
    id: null,
    height: null,
  };

  componentDidMount() {
    axios.get(this.props.url).then((response) => {
      this.setState({
        name: response.data.name,
        id: response.data.id,
        height: response.data.height,
      });
    });
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div>
        <div>Name: {this.Capitalize(this.state.name)}</div>
        <div>Id: {this.state.id}</div>
        <div>Height: {this.state.height}</div>
      </div>
    );
  }
}

export default Pokemondetail;