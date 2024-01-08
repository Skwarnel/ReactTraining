import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import product from './product'
import ShopItem from "./ShopItem";
const App = () => {
    return <ShopItem />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
