import React, { useState }  from 'react';

const Hello = () => {
    const [name, setName] = useState("Unkown Mystery");
    const nameChangeHandle = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <form>
                <h1>Hello, {name}</h1>
                <input type="text" name={name} value={name} onChange={nameChangeHandle} />
            </form>
        </>
    );
};

export default Hello;