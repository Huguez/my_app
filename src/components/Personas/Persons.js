import React, { Component } from 'react';
import Person from './Person/Person';
import Msn from '../Msn/Msn';

class Persons extends Component   {
    // static getDerivedStateFromProps( props, state ){
    //     console.log("Persons.js  getDerivedStateFromProps!!! ");
    //     return state;
    // }
    
    // metodo antiguo
    // componentWillReceiveProps() {
    //     console.log("Persons.js componentWillReceiveProps() {");
    // }

    shouldComponentUpdate( nextProps, nextState ){
        console.log("Persons.js shouldComponentUpdate");
        return true;
    }

    // componentWillUpdate(){

    // }

    getSnapshotBeforeUpdate( prevProps, prevState ){
        console.log("Persons.js  getSnapshotBeforeUpdate");
        return { msn: "snapshot si jalo" };
    }

    componentDidUpdate(prevProps, prevState, snapshot ){
        console.log("Persons.js   componentDidUpdat");
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log("Persons.js componentWillUnmount");
    }

    render(){
        return ( this.props.personas.map( ( p, index ) =>{
            return <Person
                key={ p.id }
                changed={ ( event ) => this.props.changed( event, p.id )  }
                click={ () => this.props.clicked(index) }
                name={ p.name }
                edad={ p.edad } > <Msn/>
            </Person>
        }));
    }
}

export default Persons;