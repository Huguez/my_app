import React from "react";
import clases from './Person.css';

// import './Person.css';
// import Radium from "radium";
import styled from 'styled-components';

const person = (props) => {
    let edad   = props.edad;
    let nombre = props.name;

    // const estilo ={
    //     '@media( min-width: 450px )': {
    //         width: '40%'
    //     }
    // };

    return (
        <div className={clases.Person} >
        {/* //  <StyledDiv> */}
            <h2 onClick={ props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { props.children } </p>
            <input
                type="text"
                onChange={ props.changed } 
                value={ props.name }  />
        {/* // </StyledDiv> */}
        </div>
    );
};

export default person;
