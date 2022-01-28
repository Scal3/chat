import React from 'react';

import './Chat.css'

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatWindow from '../ChatWindow/ChatWindow';

function Chat() {
  return (
      <div className="chat">
          <ChatUsers/>
          <ChatWindow/>
      </div>
  )
}

export default Chat;
