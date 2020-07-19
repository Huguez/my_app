import React from "react";
import clases from './Person.css';

// import './Person.css';
// import Radium from "radium";
// import styled from 'styled-components';

const person = (props) => {
    const edad   = props.edad;
    const nombre = props.name;
    const rnd = Math.random();

    // const estilo ={
    //     '@media( min-width: 450px )': {
    //         width: '40%'
    //     }
    // };
    if( rnd > 0.1 ){
        throw new Error( 'Algo trono Compa!!!' );    
    }
    
    return (
        
        <div className={clases.Person} >
        {/* //  <StyledDiv> */}
            <h2 onClick={ props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { props.children } </p>
            <p>{ rnd }</p>
            <input
                type="text"
                onChange={ props.changed } 
                value={ props.name }  />
        {/* // </StyledDiv> */}
        </div>
    );
};

export default person;
