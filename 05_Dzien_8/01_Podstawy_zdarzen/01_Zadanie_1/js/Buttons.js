import React from 'react';

const Buttons = () => {

    const handleClick = () => {
        console.log("Przycisk kliknięty");
    }

    function handleClick2() {
        const numberA = prompt("Podaj liczbę A")
        const numberB = prompt("Podaj liczbę B")
        console.log(Math.pow(numberA, numberB));
    }

    const handleClick3 = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log("Szerokość okna to: " + width + "\nWysokość okna to " + height);
    }

    return (
        <div>
          <button onClick={handleClick}>Wyświetlam kliknięcie</button>
          <button onClick={handleClick2}>Potęguję</button>
          <button onClick={handleClick3}>Wyświetlam rozmiar okna</button>
        </div>
    );
};

export default Buttons;