import React from "react";
import { createRoot } from "react-dom/client";

const bornYear = Number.parseFloat(prompt("Podaj swój rok urodzenia"));
const currentYear = new Date().getFullYear();

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Twój wiek to: {currentYear - bornYear} lat</h1>);
