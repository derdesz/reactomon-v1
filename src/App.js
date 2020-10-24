import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemonlist from "./components/Pokemonlist";
import Typelist from "./components/Typelist";
import Pokemondetail from "./components/Pokemondetail";

class App extends Component {
  state = { currentPath: "", currentUrl: "" };

  handleOnClick = (url) => {
    this.setState({ currentUrl: url });
    const path = url.substring(34);
    this.setState({ currentPath: path });
  };

  render() {
    if (this.state.currentPath === "") {
      return (
        <div className="App">
          <Router>
            <Navbar />
            <br />
            <Switch>
              <Route
                path="/pokemons"
                render={(props) => (
                  <Pokemonlist {...props} handleOnClick={this.handleOnClick} />
                )}
              />
              <Route path="/types" component={Typelist} />
            </Switch>
          </Router>
        </div>
      );
    } else return <Pokemondetail url={this.state.currentUrl} />;
  }
}

export default App;
