import React from 'react'

export default function FormAddPokemon() {
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

                <button className="ui inverted red button" type="submit">Add</button>
            </form>
        </React.Fragment>
    )
}
