import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemondetail = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setName(response.data.name);
      setId(response.data.id);
      setHeight(response.data.height);
    });
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <div>Name: {Capitalize(name)}</div>
      <div>Id: {id}</div>
      <div>Height: {height}</div>
    </div>
  );
};

export default Pokemondetail;
