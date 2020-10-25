import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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

const Typelist = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((response) => {
      setTypes(response.data.results);
    });
  }, []);
  

  return types.map((type) => <StyledType key={type.name}>{type.name}</StyledType>);
    
};
export default Typelist;
