import React, { Component } from "react";
import clases from './Person.css';

class Person extends Component {

    render(){
        const edad   = this.props.edad;
        const nombre = this.props.name;
        const rnd = Math.random();
        
        return( 
        <div className={clases.Person} >
            {/* //  <StyledDiv> */}
            <h2 onClick={ this.props.click } > Soy { nombre } con { edad } years !! </h2>
            <p> { this.props.children } </p>
            <p>{ rnd }</p>
            <input
                type="text"
                onChange={ this.props.changed } 
                value={ this.props.name }  />
            {/* // </StyledDiv> */}
        </div> );   
    }
}

export default Person;
