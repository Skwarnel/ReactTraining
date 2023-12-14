import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import Menu from "./Menu";

const list = [
    {
        url: "/",
        text: "Main Page"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
];
const App = () => {
    return <Menu links={list}/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
