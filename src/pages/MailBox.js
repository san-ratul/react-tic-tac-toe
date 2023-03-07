import React from "react";
import Navbar from "../Component/Navbar";
function MailBox(props) {
    const unreadMessages = ['message 1', 're: Message 1', 're:re: Message 1'];
    return (
        <>
            <Navbar/>
            <div>
                <h1>Hello</h1>
                {
                    unreadMessages.length > 0 ? <h2> You have {unreadMessages.length} unread messages </h2> : ''
                }
                {
                    unreadMessages.map((message, index) => <h3 key={index}>{message}</h3>)
                }
            </div>
        </>

    );
}

export default MailBox