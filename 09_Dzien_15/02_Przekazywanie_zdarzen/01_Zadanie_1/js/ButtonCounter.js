import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

function ButtonCounter() {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevState => prevState + 1)
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick increment={3} />
            <ButtonToClick increment={increment} />
        </div>
    );
}

export default ButtonCounter;