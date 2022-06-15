import React from 'react';

//button component, very simple component
export const Button = ({ text, onClick }) => {
    return (
    <button 
        onClick={onClick}>
        {text}
    </button>
    )
}
