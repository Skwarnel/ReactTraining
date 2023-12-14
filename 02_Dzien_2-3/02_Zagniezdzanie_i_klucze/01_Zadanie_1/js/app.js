import React from "react";
import {createRoot} from "react-dom/client";
import {v4 as uuidv4} from 'uuid';
import people from "./data/people";

const list = <ul>
    {
        people.map(elem => {
            const guid = uuidv4();
            console.log(guid);
            return <li key={guid}>{elem.title} + {elem.name} + {elem.bio}
                <p><img src={elem.avatar} width="300px" height="200px"/></p>
            </li>
        })
    }
</ul>;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <h1>Hello, World!</h1>
        {list}
    </>
);
