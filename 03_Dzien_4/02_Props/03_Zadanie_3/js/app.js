import React, { Component } from "react";
import { createRoot } from "react-dom/client"
import Sum from "./Sum";

const App = () => {
    return <Sum numbers={[3, 5, 7, 8, 9, 5, 1]} />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
