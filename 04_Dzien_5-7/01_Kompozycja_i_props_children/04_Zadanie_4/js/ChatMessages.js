import React from 'react';
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
    const list = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"]
    return (
        <>
            <div>
                <ul>
                    {
                        list.map( (elem, index) => {
                            return <ChatMessage key={index} msg={elem} />
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default ChatMessages;