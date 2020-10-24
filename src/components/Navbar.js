import React from "react";
import { Link } from "react-router-dom";
import MainApp from "./MainApp";

const Navbar = (props) => {

  return (
    <div>
      <Link to="/" onClick={() => props.handleOnClick("")} >Home</Link> |<Link to="/pokemons" onClick={() => props.handleOnClick("")}>Pokemons</Link> | <Link to="/types" onClick={() => props.handleOnClick("")}>Types</Link>
    </div>
  );
};

export default Navbar;
