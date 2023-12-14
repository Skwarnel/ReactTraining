import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AddNumbers from "./AddNumbers";

const App = () => {
    return <AddNumbers numberA={54} numberB= {89} />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
