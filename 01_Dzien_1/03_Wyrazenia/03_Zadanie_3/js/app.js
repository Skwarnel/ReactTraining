import React from "react";
import { createRoot } from "react-dom/client";
import person from './data/person';

const data = (
    <ul>
        <li>{person.title}</li>
        <li>{person.firstName}</li>
        <li>{person.lastName}</li>
        <li>{person.age}</li>
    </ul>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{data}</h1>);
