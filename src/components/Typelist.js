import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Typelist = () => {
    const [types, setTypes] = useState([]);
    


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type').then((response) => {
            setTypes(response.data.results)
        });
    }, [])


    // componentDidMount() {
    //     axios.get('https://pokeapi.co/api/v2/type').then((response) => {
    //         this.setState({types: response.data.results})
    //     })
    // }



    
        return (
            types.map((type) => (
                <div key={type.name}>{type.name}</div>
            ))
            
        );
    

}
export default Typelist;
