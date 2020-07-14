import React from "react";

import './Person.css';


const person = (props) => {
    let edad   = props.edad;
    let nombre = props.name;
    return (
        <div className="Person" >
            <h2 onClick={ props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { props.children } </p>
            <input
                type="text"
                onChange={ props.changed } 
                value={ props.name }  />
        </div>
    );
};

export default person;
