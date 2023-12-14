import React from 'react';

const Sum = (props) => {
    const arr = props.numbers;
    return (
        <div>
            {
                arr.reduce( (prev, next) => {
                    return prev + next;
                })
            }
        </div>
    );
};

export default Sum;