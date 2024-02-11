import React from 'react';

function ButtonToClick({increment, msg}) {
    const handleClick = () => {
        if (typeof increment === 'function') {
            increment()
        }
    }
    return (
        <button onClick={handleClick}>{msg}</button>
    );
}

export default ButtonToClick;