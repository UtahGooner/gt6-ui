import React from 'react';
import ChatLine from "./ChatLine";
import {Chat} from "../types";

const ChatList = ({list, tagName, url, chatText}:
                      {
                          list: Chat[],
                          tagName?: string,
                          url?: string,
                          chatText?: string,
                      }) => {
    return (
        <>
            {!!chatText && !!tagName && (
                <div className="new-chat">
                    <ChatLine tagname={tagName} url={url || ''} chattext={chatText}/>
                </div>
            )}
            {list.map(chat => <ChatLine key={chat.id} {...chat}/>)}
        </>
    );


}
export default ChatList;
