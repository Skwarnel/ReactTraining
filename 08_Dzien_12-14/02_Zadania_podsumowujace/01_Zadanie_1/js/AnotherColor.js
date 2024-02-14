import React, { useState, useEffect } from 'react';

const AnotherColor = () => {
    const [color, setColor] = useState('yellow');
    useEffect( () => {
        console.log("Startuję")
        const idTimer = setTimeout( () => {
            setColor(prev => 'blue');
            console.log("Wyzwoliłem się");
        }, 5000)

        return () => clearTimeout(idTimer);

    }, [])

    return (
        <div style={{backgroundColor: color, height: '150px', width: '150px'}}>
           hej
        </div>
    );
};

export default AnotherColor;