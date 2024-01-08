import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

const App = () => {
    return <ParentComponent message="Renderuję się w App">
        <h1>To działa czy nie?!</h1>
    </ParentComponent>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
