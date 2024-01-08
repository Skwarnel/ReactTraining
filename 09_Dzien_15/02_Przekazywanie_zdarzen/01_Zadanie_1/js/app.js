import React from "react";
import { createRoot } from "react-dom/client";
import ButtonCounter from "./ButtonCounter";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return (
        <ButtonCounter />
    );
}

root.render(<App />);