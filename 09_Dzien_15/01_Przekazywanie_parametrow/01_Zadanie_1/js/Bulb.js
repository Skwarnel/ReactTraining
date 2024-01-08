import React, {useState} from 'react';

const Bulb = () => {
    const [isBulbTurnedOn, setIsBulbTurnedOn] = useState(false);

    return (
        <>
        <div style={{height: 100, width: 100, backgroundColor: isBulbTurnedOn ? 'yellow' : 'white'}} />
            <button onClick={() => setIsBulbTurnedOn(prev => !prev)}>{isBulbTurnedOn ? 'Off' : 'On'}</button>
        </>
    );
};

export default Bulb;