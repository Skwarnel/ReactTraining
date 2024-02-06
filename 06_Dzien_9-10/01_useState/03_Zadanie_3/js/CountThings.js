import React, {useState} from 'react';

const CountThings = () => {
    const [accountBalance, setAccountBalance] = useState(10000);
    const [userAge, setUserAge] = useState(18);
    const getRich = ( event => {
        setAccountBalance( prev => prev + 1000);
    });

    const getOlder = ( event => {
        setUserAge( prev => {
            return prev + 1;
        })
    })

    return (
        <>
            <div>
                <p>💰 so much money: ${accountBalance}</p>
                <p>Age: {userAge}</p>
            </div>
            <div>
                <button onMouseEnter={getRich}>
                    Get rich!
                </button>
            </div>
            <div>
                <button onMouseLeave={getOlder}>
                    Get older
                </button>
            </div>
        </>
    );
};

export default CountThings;