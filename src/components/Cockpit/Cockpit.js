import React from 'react';

import classes from './Cockpit.css'

const Cockpit = (props)  => {
    let msn = 'Todo bien';
    let btnclas = '';

    let assinedclasses = [];

    if( props.show ){
        btnclas = classes.red;
    }
    
    if( props.personas.length === 2 ){
        assinedclasses.push(classes.red);
        msn = 'Cuidado, solo tienes 2';
    }

    if( props.personas.length <= 1 ){
        assinedclasses.push( classes.bold );
        assinedclasses.push( classes.red );
        msn = 'Solo te queda 1';
    }

    return ( 
        <div className={ classes.Cockpit }>
            <h1> { props.titulo } </h1>
            <p className={ assinedclasses.join( ' ' ) } > { msn }.</p>
            <button
                className={ btnclas }
                onClick={ props.clickeado  } >Cambiar Nombre
            </button>            
        </div> );
};

export default Cockpit;