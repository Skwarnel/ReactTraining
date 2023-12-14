import React from "react";

function Menu(props) {
    const arr = props.links;
    console.log(arr);
    return (
        <ul>
            {
                arr.map( (elem, index) => {
                    return <li key={index}><a href={elem.url}>{elem.text}</a></li>
                })
            }

        </ul>
    )
};
export default Menu;