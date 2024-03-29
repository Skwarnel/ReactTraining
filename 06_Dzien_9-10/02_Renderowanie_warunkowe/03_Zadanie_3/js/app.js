import React from "react";
import {createRoot} from "react-dom/client";
import NumberInfo from "./NumberInfo";

const App = () => {
    return (
        <div>
            <NumberInfo number={1}/>
            <NumberInfo number={2}/>
            <NumberInfo number={5}/>
            <NumberInfo number={7}/>
            <NumberInfo number={10}/>
            <NumberInfo number={16}/>
            <NumberInfo number={71}/>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
