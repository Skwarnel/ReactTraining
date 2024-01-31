import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

const App = () => {

    const [pokemon, setPokemon] = useState();

    const fetchData = () => {
        const data = fetch('https://pokeapi.co/api/v2/pokemon', {method: "GET"});
        const parsedResponse = data
            .then(resp => {
                if (resp.ok) {
                    return resp.json
                }
            })
            .then(data => console.log(data))
            .catch(err => console.warn(err));
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <ul>
                {pokemon}
            </ul>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
