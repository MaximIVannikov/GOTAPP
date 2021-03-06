import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

// if used from public folder <img src = {process.env.PUBLIC_URL + '/img/error.jpg'} alt ='error'></img>


const ErrorMessage = () => {
    return (
        <>
            <img src = {img} alt ='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;