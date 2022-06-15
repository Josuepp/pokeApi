import React from 'react';

const ButtonNext = ({onClick}) => {

    return (
        <button className="bg-white rounded shadow-lg p-4" onClick={()=> onClick()}>
            Next
        </button>
    );
}

export default ButtonNext;