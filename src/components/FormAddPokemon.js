import React from 'react'

export default function FormAddPokemon() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const clickOnSubmit = () => {
        const newPokemon = {
            name: name,
            imageUrl: imageUrl,
        };
        
        axios.post("http://localhost:8080/save-new-pokemon", newPokemon);
        setName("");
        setImageUrl("");

        alert("Pokemon saved successfully!");

    }

    return (
        <React.Fragment>
            <p className="subtitle">Add new pokemon</p>
            <form className="ui inverted form" name="new-pokemon">

                <div className="field">
                    <label>Name</label>
                    <input type="text" name="pokemon-name" placeholder="Pokemon's name"/>
                </div>

                <div className="field">
                    <label>Image URL</label>
                    <input type="text" name="pokemon-image-url" placeholder="Pokemon's image URL"/>
                </div>

                <button className="ui inverted red button" type="submit" onClick={clickOnSubmit}>Add</button>
            </form>
        </React.Fragment>
    )
}
