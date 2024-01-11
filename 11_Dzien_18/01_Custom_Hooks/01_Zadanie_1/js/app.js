import React from "react";
import { createRoot } from "react-dom/client";
import InteractiveDiv from "./InteractiveDiv";

const App = () => {
    return <InteractiveDiv />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
