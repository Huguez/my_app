import React, { Component } from 'react';
// import React, { useState } from 'react';
import clases from './App.css';
import Person from './Person/Person';
import Msn from './Msn/Msn';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

        let buttonClass = [clases.Button]; 

        if( this.state.show ){ 
            personas = ( 
                <div>
                    { this.state.persons.map( ( p, index ) =>{
                        return <ErrorBoundary key={p.id} >
                            <Person
                            key={ p.id }
                            changed={ ( event ) => this.cambiarNombre( event, p.id )  }
                            click={ () => this.borrarPersona(index) }
                            name={ p.name }
                            edad={ p.edad } > <Msn/> </Person>
                        </ErrorBoundary>
                    } ) }
                </div>
            );
            buttonClass.push( clases.Red );
        }
        let msn = 'Todo bien';

        let classes = [];
        if( this.state.persons.length <= 2 ){
            classes.push(clases.red);
            msn = 'Cuidado, solo tienes 2';
        }

        if( this.state.persons.length === 1 ){
            classes.push( clases.bold );
            msn = 'Solo te queda 1';
        }

        return (
            
            <div className = { clases.App } >
                <h1>Hi, I'm a React App</h1>
                    <p className={ classes.join( ' ' ) } > { msn }.</p>

                    <button
                        className={ buttonClass.join(' ') }
                        onClick={ this.mostrar } >Cambiar Nombre
                    </button>
                    { personas }
            
            </div>

        );
    }
}

export default App;