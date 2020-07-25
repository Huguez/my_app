import React, { Component } from "react";
import clases from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux'; 
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props){
        super(props);
        this.inputElemntRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElemnt.focus();
        this.inputElemntRef.current.focus();
        console.log( "this.context: ", this.context.authenticated );
    }

    render(){
        const edad   = this.props.edad;
        const nombre = this.props.name;
        const rnd = Math.random();
        console.log("Person.js rendering");

        return(
            <Aux>
                {
                    this.context.authenticated ? (<p>Estas Dentro</p>) : (<p>Logeate bato</p>)  
                }
                <h2 onClick={ this.props.click } > Soy { nombre } con { edad } years !! </h2>
                <p> { this.props.children } </p>
                <p>{ rnd }</p>
                <input
                    // ref={ ( input )=>{ this.inputElemnt = input } }
                    ref={ this.inputElemntRef }
                    type="text"
                    onChange={ this.props.changed } 
                    value={ this.props.name }  />
            </Aux>
        // <div className={clases.Person} ></div>
        );   
    }
}

Person.propTypes = { 
    click:   PropTypes.func,
    changed: PropTypes.func,
    name:    PropTypes.string,
    edad:    PropTypes.number
};

export default WithClass(Person, clases.Person);
