import React, { useState, useEffect } from 'react';
import ShowInfo from "./ShowInfo";

const PropsToState = () => {
    const [text, setText] = useState("My message is: learn deep as slow is smooth and smooth is fast");

    useEffect(() => {
        const idInterval = setInterval( () => {
            setText(prev => prev.concat("."));
        }, 1000)
    }, []);

    return (
        <div>
            <ShowInfo info={text}/>
        </div>
    );
};

export default PropsToState;