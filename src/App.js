import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Msn from './Msn/Msn';
import Radium, { StyleRoot }from 'radium';

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
        const style ={
            backgroundColor: 'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            cursor:'poiner',
            padding: '8px',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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
            style.backgroundColor = 'red';
            style[':hover'] = { 
                backgroundColor: 'salmon',
                color: 'black'
            }
        }
        let msn = 'Todo bien';

        let classes = [];
        if( this.state.persons.length <= 2 ){
            classes.push('red');
            msn = 'Cuidado, solo tienes 2';
        }
        if( this.state.persons.length === 1 ){
            classes.push( 'bold' );
            msn = 'Solo te queda 1';
        }

        return (
            <StyleRoot>
            <div className = "App" >
                <h1>Hi, I'm a React App</h1>
                    <p className={ classes.join( ' ' ) } > { msn }.</p>

                    <button 
                        style={style}
                        onClick={ this.mostrar } >Cambiar Nombre
                    </button>
                    { personas }
            </div>
            </StyleRoot>
        );
    }
}

export default Radium( App );