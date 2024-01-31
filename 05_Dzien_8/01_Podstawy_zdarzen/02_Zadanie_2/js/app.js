import React from "react";
import { createRoot } from "react-dom/client";
import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";

const App = () => {
    return (
        <div>
            <ShowUserFunc name="Grigoli" surname="Func"/>
            <ShowUserClass name="Grigoli" surname="Class" />
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
