import React from "react";
import styled from 'styled-components';


const StyledType = styled.div`
  width: 50%;
  margin-top: 15px;
  color: whitesmoke;
  text-decoration: none;
  border: 5px solid rgba(50 36 44 / 30%);    
  border-radius: 20px;           
  align-items: center;        
  padding: 15px;
  text-align: center;
  background-color: rgba(81 51 68 / 65%);
`;

const CatchedPokemons = (props) => {
    
  return props.catchedPokemonsList.map((name) => (
    <StyledType key={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</StyledType>
  ));
};

export default CatchedPokemons;
