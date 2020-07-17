import React from "react";

// import './Person.css';
// import Radium from "radium";
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 10px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    padding-top: 0px;
    text-align: center;

    @media( min-width: 500px ){
        width: 450px;
    }
`;

const person = (props) => {
    let edad   = props.edad;
    let nombre = props.name;

    // const estilo ={
    //     '@media( min-width: 450px )': {
    //         width: '40%'
    //     }
    // };

    return (
        // <div className="Person"  style={estilo}>
         <StyledDiv>
            <h2 onClick={ props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { props.children } </p>
            <input
                type="text"
                onChange={ props.changed } 
                value={ props.name }  />
        </StyledDiv>
        //  </div>
    );
};

export default person;
