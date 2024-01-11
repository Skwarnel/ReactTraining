import React, {useState} from 'react';

const InteractiveDiv = () => {
    const [val, setVal] = useState(0);
    const style = {height: 100, width: `${val}px`, backgroundColor: "green"};
    const changeValHandler = (event) => {
        setVal(event.target.value);
    }
    return (
        <>
            <input type="number" value={val} onChange={changeValHandler}/>
            <div style={style}>Działam</div>
        </>
    );
}

export default InteractiveDiv;