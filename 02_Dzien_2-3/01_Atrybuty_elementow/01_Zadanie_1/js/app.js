import React from "react";
import { createRoot } from "react-dom/client";

const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";
const tag = <img style={{height: '700px', width: '1000px'}} src={imageUrl}/>

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello World, {tag}</h1>);
