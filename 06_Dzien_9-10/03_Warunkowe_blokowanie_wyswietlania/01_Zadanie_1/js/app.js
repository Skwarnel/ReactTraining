import React from "react";
import { createRoot } from "react-dom/client";
import SecretStuff from "./SecretStuff";

const App = () => {
    return <SecretStuff password="pass" correctPassword="pass" secret="unrevealed secret" />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
