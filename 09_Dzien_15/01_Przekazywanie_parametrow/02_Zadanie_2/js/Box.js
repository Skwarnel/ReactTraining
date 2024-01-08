import React, {useState} from 'react';

const Box = () => {
    const styleGreen = {height: 500, width: 200, backgroundColor: 'green'};
    const [style, setStyle] = useState(styleGreen);
    const styleOrange = {height: 200, width: 300, backgroundColor: 'orange'};
    const styleBlue = {height: 100, width: 700, backgroundColor: 'blue'};
    return (
        <>
            <button onClick={() => setStyle(styleOrange)}>Orange</button>
            <button onClick={() => setStyle(styleBlue)}>Blue</button>
            <button onClick={() => setStyle(styleGreen)}>Green</button>
            <div style={style}></div>
        </>
    );
};

export default Box;