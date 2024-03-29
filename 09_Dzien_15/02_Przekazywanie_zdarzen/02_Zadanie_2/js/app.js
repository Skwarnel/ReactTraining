import React from "react";
import { createRoot } from "react-dom/client";
import Shop from "./Shop";

const App = () => {
    return <Shop />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
