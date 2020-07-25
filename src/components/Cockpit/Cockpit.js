import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css'

const Cockpit = (props)  => {

    const toggleBtnRef = useRef(null);
    
    useEffect(()=>{
        console.log("Cockpit.js useEffect");
        toggleBtnRef.current.click();
        // Http Request ...
        // const timer = setTimeout( ()=>{ //se disparara el useEffect
        //     alert( "saved data to cloud" );
        // }, 1000 );
        
        return () =>{
            // clearTimeout( timer );
            console.log("Cockpit.js Cleanup work in useEffect");
        }
    }, []); // cuando cambian estos parametros

    useEffect( () =>{
        console.log("Cockpit.js 2ND useEffect");
        return () =>{
            console.log("Cockpit.js Cleanup 2nd work in useEffect");
        } 
    });

    let msn = 'Todo bien';
    let btnclas = '';

    let assinedclasses = [];

    if( props.show ){
        btnclas = classes.red;
    }
    
    if( props.personasLength === 2 ){
        assinedclasses.push(classes.red);
        msn = 'Cuidado, solo tienes 2';
    }

    if( props.personasLength <= 1 ){
        assinedclasses.push( classes.bold );
        assinedclasses.push( classes.red );
        msn = 'Solo te queda 1';
    }

    return ( 
        <div className={ classes.Cockpit }>
            <h1> { props.titulo } </h1>
            <p className={ assinedclasses.join( ' ' ) } > { msn }.</p>
            <button
                ref={ toggleBtnRef }
                className={ btnclas }
                onClick={ props.clickeado  } >Ocultar Personas
            </button>
            <AuthContext.Consumer>
               { (context) => <button onClick={ context.login }> Log in </button> } 
            </AuthContext.Consumer>
        </div> );
};

export default React.memo( Cockpit ); // componente functional