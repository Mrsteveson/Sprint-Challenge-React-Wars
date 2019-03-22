import React from 'react';
import './StarWars.css';

const character = props => {
    return (
        <div className = 'character'>
            <h1>{props.character.name}</h1>
            <div className = 'characterDetails'>
                <div>Birthday: {props.character.birth_year}</div>
                <div>Gender: {props.character.gender}</div>
                <div>Height: {props.character.height}</div>
                <div>Mass: {props.character.mass}</div>
                <div>Hair Color: {props.character.hair_color}</div>
                <div>Skin Color: {props.character.skin_color}</div>
                {/* <div>Home World {props.character.homeworld}</div> */}
                {/* any of the url pieces just give a url and not an image :( */}
            </div>
        </div>
    )
}


export default character;