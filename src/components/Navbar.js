import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
    </div>
  );
};

export default Navbar;
