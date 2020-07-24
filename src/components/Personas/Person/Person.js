import React, { Component } from "react";
// import clases from './Person.css';

// import Aux from '../../../hoc/Aux'; 


class Person extends Component {

    render(){
        const edad   = this.props.edad;
        const nombre = this.props.name;
        const rnd = Math.random();
        console.log("Person.js rendering");

        return( 
            <React.Fragment>

            
            {/* <Aux> */}
                <h2 onClick={ this.props.click } > Soy { nombre } con { edad } years !! </h2>
                <p> { this.props.children } </p>
                <p>{ rnd }</p>
                <input
                    type="text"
                    onChange={ this.props.changed } 
                    value={ this.props.name }  />
            </React.Fragment>
            // </Aux>
        // <div className={clases.Person} ></div>
         );   
    }
}

export default Person;
