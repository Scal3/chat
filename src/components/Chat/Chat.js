import './Chat.css'

import React from 'react';

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatWindow from '../ChatWindow/ChatWindow';

const Chat = () => {
  return (
    <div className="chat">
        <ChatUsers/>
        <ChatWindow/>
    </div>
  )
}

export default Chat;
