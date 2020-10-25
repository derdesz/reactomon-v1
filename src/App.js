import React, { Component } from "react";
import "./App.css";
import MainApp from './components/MainApp';
import styled from 'styled-components';

const HTML = styled.html`
  background: url(pokemon_background.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`


class App extends Component {

  render() {
    return <MainApp/>
  }
  
}

export default App;
