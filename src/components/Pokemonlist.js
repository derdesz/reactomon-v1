import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  width: 100%;                 
  overflow: hidden;             
  display: flex;  
  flex-wrap: wrap;              
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  
`;


const StyledLink = styled(Link)`
  margin-top: 15px;
  color: whitesmoke;
  display: flex;              
  text-decoration: none;
  border: 5px solid rgba(50 36 44 / 30%);    
  border-radius: 20px;           
  align-items: center;        
  padding: 15px;
  text-align: center;
  background-color: rgba(81 51 68 / 65%);
`;

const Button = styled.button`
  color: white;
  font-size: 7px;
  border: none;
  border-radius: 2rem;
  background-color: rgba(200 0 126 / 50%);

`;

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
      <StyledLink
        to={"pokemons/" + pokemon.url.substring(34)}
        onClick={() => props.handleOnClick(pokemon.url)}
      >
        {Capitalize(pokemon.name)}
      </StyledLink>
      <Button onClick={() => props.clickOnCatch(pokemon.name)}>Catch!</Button>
      
    </div>
  ));

  return (
    <LinkContainer>
      {content}
    </LinkContainer>
  );
};

export default Pokemonlist;
