import React from 'react';

const ChatMessage = (props) => {
    const {msg} = props;
    return (
        <>
            <li>{msg}</li>
        </>
    );
};

export default ChatMessage;