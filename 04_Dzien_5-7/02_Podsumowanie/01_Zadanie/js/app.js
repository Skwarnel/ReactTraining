import React from "react";
import { createRoot } from "react-dom/client";
import product from './data/products.js'
import Receipt from "./Receipt";

function App() {
    return <Receipt list={product} />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
