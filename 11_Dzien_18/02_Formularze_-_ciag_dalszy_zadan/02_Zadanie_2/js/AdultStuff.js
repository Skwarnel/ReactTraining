import React, {useState} from 'react';
import AdultStuffBox from "./AdultStuffBox";

const AdultStuff = () => {
    const [age, setAge] = useState(0);
    const changeAgeHandler = (event) => {
        setAge(event.target.value);
    }

    return (
        <>
            <form>
                <input type="number" value={age} onChange={changeAgeHandler} />
            </form>
            <AdultStuffBox age={age} />
        </>
    );
};

export default AdultStuff;