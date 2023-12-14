import React from "react";
import {createRoot} from "react-dom/client";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

const numberA = genNumber();
const numberB = genNumber();

const result = Number.parseFloat(prompt("Podaj wynik dodawania dwóch liczb " + numberA + " oraz " + numberB));

const container = document.getElementById("app");
const root = createRoot(container);

if (result === numberA + numberB) {
    root.render(<h1>Dobrze!</h1>);
} else {
    root.render(<h1>Żle</h1>);
}
