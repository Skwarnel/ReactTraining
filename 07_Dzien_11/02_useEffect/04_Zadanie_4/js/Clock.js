import React, { useState, useEffect } from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const idInterval = setInterval(() => {
            setDate(prev => new Date());
        }, 1000);

        return () => clearTimeout(idInterval);

    }, []);

    return (
        <div>
            <h2>Tutaj pojawi się data i aktualny czas</h2>
            <p><ClockDate date={date.toDateString()} /></p>
            <p><ClockTime time={date.toTimeString()}/></p>
        </div>
    );
};

export default Clock;