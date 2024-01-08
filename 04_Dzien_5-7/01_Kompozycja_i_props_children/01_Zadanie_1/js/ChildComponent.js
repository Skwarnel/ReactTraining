import React from 'react';
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => {
    return (
        <>
            <h1>{props.message}</h1>
            <GrandChildComponent message="Renderuję się z Child">{props.children}</GrandChildComponent>
        </>
    );
};

export default ChildComponent;