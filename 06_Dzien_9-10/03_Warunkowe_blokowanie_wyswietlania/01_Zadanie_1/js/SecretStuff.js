import React from 'react';

const SecretStuff = ({password, correctPassword, secret}) => {
    return (
        <div>
            {password === correctPassword && secret}
        </div>
    );
};

export default SecretStuff;