import React from 'react';
import Person from './Person/Person';
import Msn from '../Msn/Msn';

const persons = ( props ) =>  ( props.personas.map( ( p, index ) =>{
        return <Person
            key={ p.id }
            changed={ ( event ) => props.changed( event, p.id )  }
            click={ () => props.clicked(index) }
            name={ p.name }
            edad={ p.edad } > <Msn/>
        </Person>
    } )
);


export default persons;