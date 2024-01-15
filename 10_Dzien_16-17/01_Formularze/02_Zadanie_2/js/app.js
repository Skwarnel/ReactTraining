import React from "react";
import {createRoot} from "react-dom/client";
import FakeAPI from "./data/fakeAPI";
import Form from "./Form";
import Form2 from "./Form2";

function App() {
    return (
        <>
            <Form2/>
        </>
    );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);