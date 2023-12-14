import React from 'react';

const Hello1 = (props) => {
    return (
        <>
            <div>
                {props.name}
            </div>
            <div>
                {props.surname}
            </div>
        </>
    );
};

export default Hello1;