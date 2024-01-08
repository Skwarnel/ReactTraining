import React from 'react';

const EventsTest = () => {
    const mouseEnterHandler = () => {
        console.log("Najechano na przycisk");
    }

    const clickHandler = () => {
        console.log("Czerwone pole zostało kliknięte");
    }
    const moustLeaveHanlder = () => {
        console.log("Myszka odjechała z przycisku");
    }
    return (
        <div style={{width: "100px", height: "100px", backgroundColor: "red"}} onMouseEnter={mouseEnterHandler} onMouseLeave={moustLeaveHanlder} onClick={clickHandler}>

        </div>
    );
};

export default EventsTest;