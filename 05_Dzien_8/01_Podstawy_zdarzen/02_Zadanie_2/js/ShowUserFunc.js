import React from 'react';

const ShowUserFunc = (props) => {
    const {name, surname} = props;
    return (
        <div>
            <div>My name is: {name}</div>
            <div>My surname is: {surname}</div>
        </div>
    );
};

export default ShowUserFunc;