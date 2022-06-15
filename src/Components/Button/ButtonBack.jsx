import React from 'react';


const ButtonBack = ({onClick}) => {

    return (
        <button className="bg-white rounded shadow-lg p-4" onClick={()=> onClick()}>
            Back
        </button>
    );
};

export default ButtonBack;