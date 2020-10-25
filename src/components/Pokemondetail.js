import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  border: 1px solid #ef9a9a;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: rgba(200 0 126 / 50%);
`;

const Button = styled.button`
  width: 10%;
  color: white;
  font-size: 7px;
  border: none;
  border-radius: 2rem;
  background-color: rgba(200 0 126 / 50%);
  margin-top: 10px;
  outline: none;
  &:active {
  background-color: rgba(200 0 126 / 70%);
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}

`;

const Header = styled.h3`
  color: #d32f2f;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #ef9a9a;
  background-color: #ffebee;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  object-fit: cover;
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
      setImage(response.data.sprites.other.dream_world.front_default);
    });
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Card>
      <Header>
        Name: {Capitalize(name)}
        <Button onClick={() => props.clickOnCatch(name)}>Catch!</Button>
      </Header>
      <Content>
        <div>Id: {id}</div>
        <div>Height: {height}</div>
      </Content>
      <Image>
        <img src={image} />
      </Image>
    </Card>
  );
};

export default Pokemondetail;
