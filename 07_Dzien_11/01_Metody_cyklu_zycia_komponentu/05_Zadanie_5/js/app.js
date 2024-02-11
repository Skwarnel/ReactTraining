import React from "react";
import { createRoot } from "react-dom/client";
import StrobeLight from "./StrobeLight";

function App() {
    return (
        <div>
            <StrobeLight color='red' frequency={1000} />
            <StrobeLight color='black' frequency={3000} />
            <StrobeLight color='pink' frequency={5000} />
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
