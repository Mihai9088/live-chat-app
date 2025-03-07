import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    useEffect(() => {
        // Folosește window.Echo în loc de import separat
        window.Echo.join("online")
            .here((users) => {
                console.log("users", users);
            })
            .joining((user) => {
                console.log("joining", user);
            })
            .leaving((user) => {
                console.log("leaving", user);
            })
            .error((error) => {
                console.error("error", error);
            });
    }, []);

    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;