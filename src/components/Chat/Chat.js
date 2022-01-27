import React from 'react';

import './Chat.css'

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatForm from '../ChatForm/ChatForm';

function Chat() {
  return (
      <div className="chat">
          <ChatUsers/>
          <ChatForm/>
      </div>
  )
}

export default Chat;
