import React, {useState} from 'react';

const MyButton = () => {
    const [button, setButton] = useState(false);
    const handleClick = (event) => {
        setButton( (prev) => {
            return !prev;
        })
    }
    return (
        <div>
            <button onClick={handleClick}>{button ? 'YES' : 'NO'}</button>
        </div>
    );
};

export default MyButton;