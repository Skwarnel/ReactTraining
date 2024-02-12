import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import PropsToState from "./PropsToState";

function App() {
    return <PropsToState />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
