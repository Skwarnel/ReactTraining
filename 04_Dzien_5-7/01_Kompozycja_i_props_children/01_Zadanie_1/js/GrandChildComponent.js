import React from 'react';
import ChildComponent from "./ChildComponent";

const GrandChildComponent = (props) => {
    return (
        <>
            <h1>{props.message}</h1>
            {props.children}
        </>
    );
};

export default GrandChildComponent;