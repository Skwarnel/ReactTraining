import React from "react";
import {createRoot} from "react-dom/client";

let color = prompt("Jaki kolor ramki chcesz ustawić?");
const colorsToPick = ['red', 'green', 'blue'];
const index = colorsToPick.indexOf(color);
const style = {backgroundColor: 'yellow', width: '100px', height: '100px', borderStyle: 'solid', borderColor: 'pink'};
let styleCopy;
if (index === 0) {
    styleCopy = {...style, borderColor: 'red'};
} else if (index === 1) {
    styleCopy = {...style, borderColor: 'green'};
} else if (index === 2) {
    styleCopy = {...style, borderColor: 'blue'};
} else {
    styleCopy = style;
}


console.log(index);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1 style={styleCopy}>Hello World :)</h1>);