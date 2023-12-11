import React from "react";
import {createRoot} from "react-dom/client";

const numberA = Number.parseFloat(prompt("Podaj liczbę A"));
const numberB = Number.parseFloat(prompt("Podaj liczbę B"));




const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h2>Wynik działania: {numberA} + {numberB} to: {numberA + numberB}</h2>);