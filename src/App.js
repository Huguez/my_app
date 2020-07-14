import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Msn from './Msn/Msn';

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
    
    atributo = "esto es la variable";

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
        const style ={
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let personas = null;

        if( this.state.show ){ 
            personas = ( 
                <div>
                    { this.state.persons.map( ( p, index ) =>{
                        return <Person
                            key={ p.id }
                            changed={ ( event ) => this.cambiarNombre( event, p.id )  }
                            click={ () => this.borrarPersona(index) }
                            name={ p.name }
                            edad={ p.edad } > <Msn/> </Person>
                    } ) }
                </div>
            );
        }

        return ( 
            <div className = "App" >
                <h1>Hi, I'm a React App</h1>
                    <p>{ this.atributo } Est o es una practica.</p>

                    <button 
                        style={style}
                        onClick={ this.mostrar } >Cambiar Nombre
                    </button>
                    { personas }
            </div>
        );
    }
}

export default App;