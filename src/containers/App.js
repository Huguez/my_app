import React, { Component } from 'react';

import clases from './App.css';
import Persons from '../components/Personas/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';


class App extends Component {
    
    constructor( props ){
        super( props );
        console.log("App.js -> constructor!! ");
    }

    state = {
        persons:[ 
            {id: '1', name:"Huguez" , edad: 30 },
            {id: '2', name:"Sylvia" , edad: 20 },
            {id: '3', name:"Erick" , edad: 25 },
        ],
        otherState: "otro estado de prueba",
        show: false,
        showCockpit: true
    }

    // descontinuada la puedes usar batu propio riesgo!!
    // componentWillMount(){
    //     console.log("App.js componentWillMount");
    // } 
 
    static getDerivedStateFromProps( props, state ){
        console.log("Appjs  getDerivedStateFromProps!!! ", props);
        return state;
    }

    componentDidMount(){
        console.log("App.js componentDidMount");
    }

    shouldComponentUpdate( nextProps, nextState ){
        console.log("App.js shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(){
        console.log("App.js componentDidUpdate");
    }
    
    
    mostrar = () => {
        const doesShow = !this.state.show
        this.setState({ show: doesShow });
    }

    borrarPersona = (index) => {
        const people = [ ...this.state.persons ];
        people.splice( index, 1 );
        this.setState( { persons: people } );
    }

    cambiarNombre = (event, id) => {
        const personIndex = this.state.persons.findIndex( p => { return p.id === id } )
        
        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const people = [ ...this.state.persons ];
        
        people[personIndex] = person;

        this.setState(( prevState, props ) => {
            return {
                persons: people
            }
        });
    }

    render() {
        console.log("App.js render");
        let personas = null;

        if( this.state.show ){ 
            personas = ( 
                < Persons
                    personas={ this.state.persons }
                    clicked={ this.borrarPersona }
                    changed={ this.cambiarNombre } />
            );
        }


        return (
            <Aux  >
                <button onClick={ () => { this.setState({ showCockpit: !this.state.showCockpit }) } } >Remove Cockpit</button>
                { this.state.showCockpit ?
                <Cockpit
                    titulo={ "Hi, I'm a React App" }
                    clickeado={ this.mostrar }
                    show={ this.state.show }
                    personasLength={ this.state.persons.length } />
                    : null }
                { personas }
            </Aux>

        );
    }
}

export default WithClass(App, clases.App);