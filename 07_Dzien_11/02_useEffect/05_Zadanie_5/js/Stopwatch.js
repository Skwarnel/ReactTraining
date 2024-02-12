import React, {useState, useEffect} from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let idInterval;
        if (isRunning) {
            idInterval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000)
        }
        return () => clearInterval(idInterval);
    }, [isRunning]);

    const handleLap = () => {
        setLaps((prevState) => [...prevState, time]);
        console.log(laps);
    }

    const handleStop = () => {
        setIsRunning((prevState) => false);
    }

    const handleRestart = () => {
        setIsRunning((prevState) => true);
        setTime(prevState => 0);
        setLaps([]);
    }

    const handleStart = () => {
        setIsRunning(prevState => true);
    }

    return (
        <div>
            <h1>Time: {time}s</h1>
            <div style={{padding: '10px'}}>
                <button onClick={handleLap}>Lap</button>
            </div>
            <div style={{padding: '10px'}}>
                <button onClick={handleStop}>Stop</button>
            </div>
            <div style={{padding: '10px'}}>
                <button onClick={handleRestart}>Restart</button>
            </div>
            <div style={{padding: '10px'}}>
                <button onClick={() => handleStart()}>Start</button>
            </div>
            <div>
                <h2>Laps:</h2>
                <div>
                    <ul>
                        {
                            laps.map((elem, index) => {
                                return <li key={index}>Okrążenie: {elem}s</li>
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;