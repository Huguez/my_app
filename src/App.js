import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Msn from './Msn/Msn';

class App extends Component {
    state = {
        persons:[ 
            {name:"Huguez" , edad: 30 },
            {name:"Sylvia" , edad: 20 },
            {name:"Erick" , edad: 25 },
        ],
        otherState: "otro estado de prueba",
        show: false
    }
    
    atributo = "esto es la variable";

    mostrar = () => {
        const doesShow = !this.state.show
        this.setState({ show: doesShow });
        // console.log(doesShow);
    }

    cambiarNombre = ( newName ) => {
        this.setState({
            persons: [ 
                { name: "El Huguez" , edad: 30 },
                { name: newName , edad: 25 },
                { name: "Ilyana" , edad: 20 },
            ]
        });
    }

    NombreCambiado = (event) => {
        this.setState({
            persons: [ 
                { name: "El Huguez" , edad: 30 },
                { name: event.target.value , edad: 25 },
                { name: "Ilyana" , edad: 20 },
            ]
        });
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
                    <Person 
                        name={ this.state.persons[0].name } 
                        edad={ this.state.persons[0].edad } > <Msn/> </Person>
                    
                    <Person 
                        func={ this.cambiarNombre.bind( this, "Alonso" ) } 
                        click={ this.cambiarNombre.bind( this, "Sylvi" ) }
                        changed={ this.NombreCambiado }
                        name={ this.state.persons[1].name } 
                        edad={ this.state.persons[1].edad } > <Msn hobies="y mis hobbies son: ..." /> </Person>
                        
                    <Person 
                        name={ this.state.persons[2].name } 
                        edad={ this.state.persons[2].edad } > y mis hobbies son: ...  </Person>
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
        // return React.createElement( 'div', null, React.createElement( 'h1', null, "Hi, I'm a React App" ) );
    }
}

export default App;

// const app = ( props ) => {
//     const [ personsState, setPersonsState ] = useState({
//         persons:[ 
//             {name:"Huguez" , edad: 30 },
//             {name:"Sylvia" , edad: 20 },
//             {name:"Erick" , edad: 25 },
//         ],
//         otherState: "otro estado de prueba"
//     });
    
//     const [ other, setOther ] = useState({
//         otherState: "otro valor de prueba"
//     });

//     const cambiarNombre = () => {
//         setPersonsState( {
//             persons: [ 
//                 { name: "Carlos", edad: 30 },
//                 { name: "Ilyana", edad: 20 },
//                 { name: "Fernando", edad: 25 },
//             ],
//             otherState: " otro estado de prueba"
//         });
//     };

//     return ( 
//         <div className = "App" >
//             <h1>Hi, I'm a React App</h1>
//                 <p>{ this.variable } y esto es una practica.</p>
//                 <button onClick={ cambiarNombre } >Cambiar Nombre</button>
//                 <Person name={ personsState.persons[0].name } edad={ personsState.persons[0].edad } > <Msn/> </Person>
//                 <Person name={ personsState.persons[1].name } edad={ personsState.persons[1].edad } > <Msn hobies="y mis hobbies son: ..." /> </Person>
//                 <Person name={ personsState.persons[2].name } edad={ personsState.persons[2].edad } > y mis hobbies son: ...  </Person>
//         </div>
//     );
//     // return React.createElement( 'div', null, React.createElement( 'h1', null, "Hi, I'm a React App" ) );
// }

// export default app;
