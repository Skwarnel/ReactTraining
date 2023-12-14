import React from 'react';

const AddNumbers = (props) => {
    return (
        <div>
            {props.numberA + props.numberB}
        </div>
    );
};

export default AddNumbers;