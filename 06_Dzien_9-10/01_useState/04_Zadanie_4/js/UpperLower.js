import React, {useState} from 'react';

const UpperLower = () => {
    const [ownString, setOwnString] = useState("my own string");
    const upperCase = () => {
        setOwnString( prev => prev.toUpperCase())
    }

    const lowerCase = () => {
        setOwnString( prev => prev.toLowerCase())
    }

    return (
        <div>
            <h2>
                {ownString}
            </h2>
            <div>
                <button onClick={upperCase}>Uppercase</button>
            </div>
            <div>
                <button onClick={lowerCase}>Lowercase</button>
            </div>
        </div>
    );
};

export default UpperLower;