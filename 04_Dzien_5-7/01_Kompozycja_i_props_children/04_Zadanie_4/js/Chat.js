import React from 'react';
import ChatHeader from "./ChatHeader";
import NewChatMessage from "./NewChatMessage";
import ChatMessages from "./ChatMessages";

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader />
            <ChatMessages />
            <NewChatMessage />
        </section>
    );
};

export default Chat;