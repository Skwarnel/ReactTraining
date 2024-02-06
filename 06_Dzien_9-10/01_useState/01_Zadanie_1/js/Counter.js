import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const increaseCounter = () => {
        setCounter((prev) => prev + 1)
    }

    const decreaseCounter = () => {
        setCounter(prev => prev - 1)
    }

    const resetCounter = () => {
        setCounter( prev => 10)
    }

    return (
        <>
            <div>
                Ja już nie działam
            </div>
            <h2>Liczba kliknięć: {counter}</h2>
            <div>
                <button onClick={increaseCounter}>+</button>
            </div>
            <div>
                <button onClick={decreaseCounter}>-</button>
            </div>
            <div>
                <button onClick={resetCounter}>Reset</button>
            </div>
        </>
    );
};

export default Counter;