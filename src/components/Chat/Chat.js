import React from 'react';

import './Chat.css'

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatWindow from '../ChatWindow/ChatWindow';

function Chat({ users, messages }) {
  return (
      <div className="chat">
          <ChatUsers users={users}/>
          <ChatWindow messages={messages}/>
      </div>
  )
}

export default Chat;
