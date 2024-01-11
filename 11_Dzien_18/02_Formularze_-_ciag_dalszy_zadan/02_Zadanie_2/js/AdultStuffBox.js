import React from 'react';

const AdultStuffBox = ({age}) => {
    return (
        <div>
            {age >= 18 ? "Lorem ipsum treść dla dorosłych" : "Access forbidden: your age is " + `${age}`}
        </div>
    )
};

export default AdultStuffBox;