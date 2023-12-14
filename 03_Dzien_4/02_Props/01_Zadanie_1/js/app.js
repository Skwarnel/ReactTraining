import React from 'react';
import {createRoot} from "react-dom/client";
import Hello1 from "./Hello1";
import Hello2 from "./Hello2";

const App = () => {
    return (
        <>
            <Hello1 name="Chris" surname="Talmud"/>
            <Hello2 name="Component" surname="Class"/>
        </>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);