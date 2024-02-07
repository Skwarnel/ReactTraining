import React, {useState} from 'react';

const NumberRandomInfo = () => {
    const [number, setNumber] = useState(0);

    const idInter = setInterval(() => {
        setNumber((prev) => Math.ceil(Math.random() * 5));
    }, 2000)

    return (
        <div>
            My number is:
            <div>
                {number >= 3 ? `Większa lub równa 3: ${number}` : 'Mniejsza niż 3, nie warto wyświetlać'}
            </div>
        </div>
    );
};

export default NumberRandomInfo;