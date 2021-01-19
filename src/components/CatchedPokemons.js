import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import axios from "axios";


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
  display: flex;
  
`;

const Button = styled.button`
  color: white;
  font-size: 7px;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  background-color: rgba(200 0 126 / 80%);
  margin-left: auto;
  outline: none;
  &:active {
  background-color: rgba(200 0 126 / 70%);
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}
`;


const CatchedPokemons = (props) => {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [forReload, setForReload] = useState(true);

    useEffect(async () => {
        const response = await axios.get(
            "http://localhost:8082/pokemons/all-caught-pokemons"
        );
        setCaughtPokemons(response.data);
        console.log(response);
    }, [forReload]);


    const clickOnDelete = (pokemonName) => {
        async function makePostRequest() {
            let res = await axios.post(`http://localhost:8082/pokemons/remove/${pokemonName}`);
            forReload ? setForReload(false) : setForReload(true);
        }
        makePostRequest();
    }
    
  if (caughtPokemons) {
    return caughtPokemons.map((pokemon) => (
      <StyledType key={pokemon.name}>
        <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
        <Button onClick={() => clickOnDelete(pokemon.name)}>X</Button>
      </StyledType>
    ));
  } else return (
  <StyledType>
    No catched pokemons...
  </StyledType>
  );
  
};

export default CatchedPokemons;
