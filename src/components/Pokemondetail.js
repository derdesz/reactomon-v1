import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemondetail = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(null);

  // function componentDidMount() {
  //   axios.get(this.props.url).then((response) => {
  //     setName(response.data.name);
  //     setId(response.data.id);
  //     setHeight(response.data.height);
  //     // this.setState({
  //     //   name: response.data.name,
  //     //   id: response.data.id,
  //     //   height: response.data.height,
  //     // });
  //   });
  // }

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
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
