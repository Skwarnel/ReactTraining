import React from "react";
import {createRoot} from "react-dom/client";
import DynamicLego from "./DynamicLego";

const App = () => {
    return <DynamicLego />;
}

const root = createRoot(document.getElementById("app"));

root.render(<App/>);