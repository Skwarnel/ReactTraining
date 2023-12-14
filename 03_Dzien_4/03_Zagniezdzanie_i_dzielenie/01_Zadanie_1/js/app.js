import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CurrencyConverter from "./CurrencyConverter";

const App = () => {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={100} rate={1.12278}/>
            <CurrencyConverter from="PLN" to="USD" value={200} rate={5.12278}/>
            <CurrencyConverter from="PLN" to="EUR" value={300} rate={4.34211}/>
            <CurrencyConverter from="CHR" to="PLN" value={500} rate={18.12278}/>
            <CurrencyConverter from="CHR" to="USD" value={400} rate={0.91227}/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
