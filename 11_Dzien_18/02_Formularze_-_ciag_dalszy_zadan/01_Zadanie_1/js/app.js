import React from "react";
import { createRoot } from "react-dom/client";
import PeselInput from "./PESELInput";

const App = () => {
    return <PeselInput />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
