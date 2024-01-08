import React from "react";
import { createRoot } from "react-dom/client";
import CrazyDiv from "./CrazyDiv";

const App = function() {
    return <CrazyDiv />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
