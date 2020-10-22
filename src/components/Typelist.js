import React from 'react';
import { Component } from 'react';
import axios from 'axios';


class Typelist extends Component {
    state = {
        types: []
    }


    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type').then((response) => {
            this.setState({types: response.data.results})
        })
    }



    render() {
        return (
            this.state.types.map((type) => (
                <div>{type.name}</div>
            ))
            
        );
    }

}
export default Typelist;