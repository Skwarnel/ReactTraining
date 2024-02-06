import React from "react";
import { createRoot } from "react-dom/client";
import TextTyper from "./TextTyper";

const App = () => {
    return <TextTyper text="Witaj Grzegorz Skwarna"/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
