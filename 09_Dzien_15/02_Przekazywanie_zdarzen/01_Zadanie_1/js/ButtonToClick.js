import React from 'react';

function ButtonToClick({increment}) {
    const handleClick = () => {
        if (typeof increment === 'function') {
            increment()
        }
    }
    return (
        <button onClick={handleClick}>Increment</button>
    );
}

export default ButtonToClick;