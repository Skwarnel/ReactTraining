import React, {useState} from 'react';

const Numbers = () => {
        const [numbers, setNumbers] = useState([54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]);
        const [backup, setBackup] = useState([54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]);
        const evenNumbers = () => setNumbers(prev => {
            return prev.filter((value, index) => value % 2);
        });

    const oddNumbers = () => setNumbers(prev => {
        return prev.filter((value, index) => !(value % 2));
    });


    const showAllNumbers = () => setNumbers(prev => backup);

        return (
            <div>
                <ul>
                    {numbers.map((elem, index) => {
                        return <li key={index}>{elem}</li>
                    })}
                </ul>
                <button onClick={evenNumbers}>Tylko parzyste</button>
                <button onClick={oddNumbers}>Tylko nieparzyste</button>
                <button onClick={showAllNumbers}>Wszystkie</button>
            </div>
        );
    };

export default Numbers;