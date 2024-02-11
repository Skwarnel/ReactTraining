import React, { useState, useEffect} from 'react';

const Box = () => {
    const [color, setColor] = useState('cornflowerblue');
    useEffect( () => {
        const idTimeout = setTimeout( () => {
            setColor( prevState => 'tomato')
        }, 2000)
    }, [])
    return (
        <div style={{height: '100px', width: '100px', backgroundColor: color}} >
            Jestem
        </div>
    );
};

export default Box;