import React, { useState }  from 'react'
import axios from "axios";

export default function FormAddPokemon() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handlePokemonNameChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value)
    }
    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    }

    const clickOnSubmit = () => {
        // sendPostRequest();
        const newPokemon = {
            name: name,
            imageUrl: imageUrl,
        };
        console.log(newPokemon)
        
        axios.post('http://localhost:8080/pokemon-adder/save-new-pokemon', newPokemon, {
        })
        .then(() => {console.log(newPokemon)})
        .catch(() => {"error"});
        
        // setName("");
        // setImageUrl("");

        // alert("Pokemon saved successfully!");

    }

    // const sendPostRequest = async () => {

    //     const resp = await axios.post('http://localhost:8080/pokemons/save-new-pokemon', newPokemon);
    //     console.log(resp.data);

    // };

    return (
            <div className="ui inverted segment">
                <p className="subtitle">Add new pokemon</p>
                <form className="ui inverted form" name="new-pokemon">

                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="pokemon-name" placeholder="Pokemon's name" value={name} onChange={handlePokemonNameChange}/>
                    </div>

                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" name="pokemon-image-url" placeholder="Pokemon's image URL" value={imageUrl} onChange={handleImageUrlChange}/>
                    </div>

                    <div className="ui inverted red button" onClick={clickOnSubmit}>Add</div>
                </form>
            </div>
    )
}
