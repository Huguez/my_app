import React from "react";

import './Person.css';
import Radium from "radium";


const person = (props) => {
    let edad   = props.edad;
    let nombre = props.name;

    const estilo ={
        '@media( min-width: 450px )': {
            width: '40%'
        }
    };

    return (
        <div className="Person"  style={estilo}>
            <h2 onClick={ props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { props.children } </p>
            <input
                type="text"
                onChange={ props.changed } 
                value={ props.name }  />
        </div>
    );
};

export default Radium( person );
