import React, {useState} from 'react';

const CrazyDiv = () => {
    const [top, setTop] = useState(100);
    const [left, setLeft] = useState(100);
    function createRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    return (
        <>
            <div style={{height: 100, width: 100, position: "absolute", backgroundColor: 'yellow', top: top, left: left}}
                 onMouseEnter={() => {
                     setTop(createRandom(0, 700));
                     setLeft(createRandom(300, 600));
                     console.log("jestem");
                 }
            }>Hi
            </div>
        </>
    );
};

export default CrazyDiv;