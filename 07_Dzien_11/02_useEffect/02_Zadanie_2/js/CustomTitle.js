import React, {useState, useEffect} from 'react';

const CustomTitle = () => {
    const [clicked, setClicked] = useState(1);
    const [font, setFont] = useState('1.0');
    useEffect( () => {
        document.title = `Kliknięto ${clicked} razy`
    }, [clicked])

    const handleClick = () => {
        setClicked(prev => prev + 1);
        setFont(prev => (prev * 1.2));
    }

    return (
        <div>
            how how
            <p onClick={handleClick} style={{fontSize: `${font}rem`}}>Kliknięto mnie już: {clicked} razy</p>
        </div>
    );
};

export default CustomTitle;