import React from 'react';
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
    return (
        <>
            <h1>{props.message}</h1>
            <ChildComponent message="Renderuję się z Parent">{props.children}</ChildComponent>
        </>
    );
};

export default ParentComponent;