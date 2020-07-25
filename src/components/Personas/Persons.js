import React, { PureComponent } from 'react';
import Person from './Person/Person';
import Msn from '../Msn/Msn';


class Persons extends PureComponent   {
    // static getDerivedStateFromProps( props, state ){
    //     console.log("Persons.js  getDerivedStateFromProps!!! ");
    //     return state;
    // }
    
    // metodo antiguo
    // componentWillReceiveProps() {
    //     console.log("Persons.js componentWillReceiveProps() {");
    // }

    // shouldComponentUpdate( nextProps, nextState ){ //Componente Basado en Clases!!!!!
    //     console.log("Persons.js shouldComponentUpdate");
    //     if( nextProps.personas !== this.props.personas ||
    //         nextProps.changed  !== this.props.changed  ||
    //         nextProps.clicked  !== this.props.clicked  ){
    //         return true;
    //     }
    //     return false;
    // }

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
                    isAuth={ this.props.isAuthenticated }
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