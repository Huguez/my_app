import React, { Component } from 'react';
// import React, { useState } from 'react';
import clases from './App.css';
import Persons from '../components/Personas/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'



// import Radium, { StyleRoot }from 'radium';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//     background-color: ${ props => props.boleano ? 'red' : 'green' };
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     cursor: poiner;
//     padding: 8px;
    
//     :hover {
//         background-color: ${ props => props.boleano ? 'salmon' : 'lightgreen' };
//         color: 'black';
//     }
// `;


class App extends Component {
    state = {
        persons:[ 
            {id: '1', name:"Huguez" , edad: 30 },
            {id: '2', name:"Sylvia" , edad: 20 },
            {id: '3', name:"Erick" , edad: 25 },
        ],
        otherState: "otro estado de prueba",
        show: false
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
        // const person = Object.assign( {}, this.state.persons[personIndex] );

        person.name = event.target.value;

        const people = [ ...this.state.persons ];
        
        people[personIndex] = person;

        this.setState( { persons: people } );

    };

    render() {
        
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
            
            <div className = { clases.App } >
                <Cockpit
                    clickeado={ this.mostrar }
                    show={ this.state.show }
                    personas={ this.state.persons } />
                { personas }
            </div>

        );
    }
}

export default App;