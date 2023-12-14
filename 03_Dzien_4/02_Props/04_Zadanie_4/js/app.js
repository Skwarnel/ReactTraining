import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import LikeBox from "./LikeBox";

const App = () => {
    return <LikeBox counter={4589}/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);