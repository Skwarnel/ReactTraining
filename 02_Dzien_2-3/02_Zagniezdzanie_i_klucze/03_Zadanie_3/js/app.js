import React from "react";
import {createRoot} from "react-dom/client";
import people from "./data/people";

const list = <ul>
    {
        people.map((el, index) => {
            return <li key={el.id}>
                <div className="person">
                    <img src={el.avatar}/>
                    <div className="info">
                        <h1>{el.title} {el.name} {el.surname}</h1>
                        <p>{el.bio}</p>
                    </div>
                </div>
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
