import React from "react";
import {createRoot} from "react-dom/client";
import person from './data/person.js';

const list =
    <>
        <h2>{person.title} {person.firstName} {person.lastName}</h2>
        <span>
            {person.age}
        </span>
    </>;


const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <h1>Hello, World!</h1>
        <div>
            {list}
        </div>
    </>);