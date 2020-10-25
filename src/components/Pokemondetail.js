import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;                 /* Set width of cards */
  border: 1px solid #EF9A9A;    /* Set up Border */
  border-radius: 4px;           /* Slightly Curve edges */
  overflow: hidden;             /* Fixes the corners */
  display: flex;                /* Children use Flexbox */
  flex-direction: column;
  margin-top: 30px;
  background-color: rgba(200 0 126 / 50%);
`;

const Header =styled.h3`
  color: #D32F2F;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #EF9A9A;
  background-color: #FFEBEE;
  padding: 5px 10px;
`;

const Content = styled.p`
  font-size: 10px;
  color: whitesmoke;
  display: flex;              
  flex-direction: column;     
  justify-content: center;    
  align-items: center;        
  padding: 15px 0; 
  background-color: rgba(200 0 126 / 80%);
  
  `;

  const Image = styled.image`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover ;
  `;

const Pokemondetail = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setName(response.data.name);
      setId(response.data.id);
      setHeight(response.data.height);
      setImage(response.data.sprites.other.dream_world.front_default)
    });
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Card>
      <Header>Name: {Capitalize(name)}</Header>
      <Content>
        <div>Id: {id}</div>
        <div>Height: {height}</div>
      </Content>
      <Image><img src={image}/></Image>
    </Card>
  );
};

export default Pokemondetail;
