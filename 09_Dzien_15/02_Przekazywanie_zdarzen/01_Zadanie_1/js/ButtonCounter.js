import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

function ButtonCounter() {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevState => prevState + 1)
    const decrement = () => setCounter(prevState => prevState - 1)
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick increment={decrement} msg="Nie lubię" />
            <ButtonToClick increment={increment} msg="Lubię" />
        </div>
    );
}

export default ButtonCounter;