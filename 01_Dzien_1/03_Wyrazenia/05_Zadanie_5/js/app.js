import React from "react";
import {createRoot} from "react-dom/client";

const a = Number.parseFloat(prompt("podaj liczbę A"));
const b = Number.parseFloat(prompt("podaj liczbę B"));
const operation = prompt("Podaj rodzaj działania");

function calc(numberA, numberB, operation) {

    let result;

    switch (operation) {
        case "+":
            result = numberA + numberB;
            break;
        case "-":
            result = numberA - numberB;
            break;
        case "/":
            result = numberA / numberB;
            break;
        case "*":
            result = numberA * numberB;
            break;
        default:
            result = "Podałeś błędne dane";
    }
    return <div><h1>Wynik działania to </h1><h2>{result}</h2></div>;
}

const data = calc(a, b, operation);

const container = document.getElementById("app");
const root = createRoot(container);
root.render({data});


// import React from "react";
// import { createRoot } from "react-dom/client";
//
// const container = document.getElementById("app");
// const root = createRoot(container);
//
// const numberA = Number(prompt('Podaj pierwszą liczbę: '));
// const numberB = Number(prompt('Podaj drugą liczbę: '));
// const algebraicOperation = String(prompt('Wybierz matematyczne działanie do wykonania (+ - * : )'));
//
// function calc(a, b, operation) {
//     if (operation === "+") {
//         return <h1>Wynik to: {a + b}</h1>;
//     } else if (operation === "-") {
//         return <h2>Wynik to: {a - b}</h2>;
//     } else if (operation === "*") {
//         return <h3>Wynik to: {a * b}</h3>;
//     } else if (operation === "/") {
//         return <h4>Wynik to: {a / b}</h4>;
//     } else {
//         return <h5>Wprowadziłeś błędne dane</h5>;
//     }
// }
//
// root.render(<div>{calc(numberA, numberB, algebraicOperation)}</div>);
