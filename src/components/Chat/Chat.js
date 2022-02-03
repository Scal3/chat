import React from 'react';

import './Chat.css'

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatWindow from '../ChatWindow/ChatWindow';

function Chat({ users, messages, userName, room }) {
  return (
      <div className="chat">
          <ChatUsers users={users}/>
          <ChatWindow messages={messages} userName={userName} room={room}/>
      </div>
  )
}

export default Chat;
