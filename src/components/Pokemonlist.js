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
  margin-top: 5px;
  margin-bottom: 10px;
  
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
  &:active {
  background-color: rgba(200 0 126 / 40%);
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}
`;

const Button = styled.button`
  color: white;
  font-size: 7px;
  border: none;
  border-radius: 2rem;
  background-color: rgba(200 0 126 / 50%);
  outline: none;
  &:active {
  background-color: rgba(200 0 126 / 70%);
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}

`;

const NextButton = styled.button`
  color: white;
  font-size: 15px;
  border-radius: 2rem;
  background-color: rgba(200 0 126 / 80%);
  outline: none;
`;

const Pokemonlist = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    console.log("loaded");
      const originals = "http://localhost:8080/pokemon/pokemons"
      const added = "http://localhost:8080/pokemon-adder/all-added-pokemons"

      const requestOriginals = axios.get(originals);
      const requestAdded = axios.get(added);

      axios.all([requestOriginals, requestAdded])
      .then(axios.spread((...responses) => {
        console.log(responses[0].data.concat(responses[1].data))
          setPokemons(responses[0].data.concat(responses[1].data));
          setNextUrl(pokemons.next);
          setPreviousUrl(pokemons.previous);
          console.log(nextUrl);
 
      }))

  //   axios.get("https://pokeapi.co/api/v2/pokemon")
  //   .then((response) => {
  //     setPokemons(response.data.results);
  //     setNextUrl(response.data.next);
  //     setPreviousUrl(response.data.previous);
  //     // console.log(nextUrl);
  //   });
  }, []);

 function handleNext() {
   if (nextUrl !== null) {
    axios.get(nextUrl).then((responses) => {
      setPokemons(responses[0].data.concat(responses[1].data));
      setNextUrl(pokemons.next);
      setPreviousUrl(pokemons.previous);
    })
   }
 };

 function handlePrevious() {
   if (previousUrl !== null) {
    axios.get(previousUrl).then((response) => {
      setPokemons(response.data.results);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
    })
   }
};


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
      <LinkContainer>
        <NextButton onClick={() => handlePrevious()}> « </NextButton>
        <NextButton onClick={() => handleNext()}> » </NextButton>
      </LinkContainer>
      {content}
    </LinkContainer>
  );
};

export default Pokemonlist;
