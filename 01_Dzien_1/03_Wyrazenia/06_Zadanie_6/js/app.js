import React from "react";
import {createRoot} from "react-dom/client";
import animals from './data/animals';

const result = (
    <section>
        <h2>Liczba zwierząt to: {animals.length}</h2>
        <h3>
            {animals.join(", ")}
        </h3>
    </section>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{result}</h1>);
