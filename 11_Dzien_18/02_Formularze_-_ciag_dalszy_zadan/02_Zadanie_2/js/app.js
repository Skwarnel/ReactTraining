import React from "react";
import {createRoot} from "react-dom/client";
import AdultStuff from "./AdultStuff";

const App = () => <AdultStuff />;

const root = createRoot(document.getElementById("app"));
root.render(<App/>);
