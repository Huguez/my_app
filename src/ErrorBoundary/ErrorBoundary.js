import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state ={
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, _ ) =>{
        this.setState( { 
            hasError: true,
            errorMessage: error } );

    }

    render(){
        const msn = this.state.errorMessage ?  this.state.errorMessage: this.props.children ;

        return (<h1>{ msn }</h1>);
    }
}

export default ErrorBoundary;