import React, {useState} from 'react';

const ColorfulBoxes = () => {
    const [boxes, setBoxes] = useState([]);
    const handleClick = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBoxes( prev => [...prev, randomColor])
    }
    return (
        <>
            <div>
                <button onClick={handleClick}>Dodaj Boxa!</button>
            </div>
            <div>
                {boxes.map( (elem, index) => {
                    return <div key={index} style={{width: '200px', height: '200px', backgroundColor: elem }}></div>
                })}
            </div>
        </>
    );
};

export default ColorfulBoxes;