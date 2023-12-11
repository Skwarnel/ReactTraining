import React from "react";
import {createRoot} from "react-dom/client";

const numberA = Number.parseFloat(prompt("podaj liczbę A"));
const numberB = Number.parseFloat(prompt("podaj liczbę B"));
const type = prompt("Podaj rodzaj działania");
let result;

switch (type) {
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

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Wynik działania to {result}</h1>);
