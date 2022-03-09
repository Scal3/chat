import React from 'react';

import './Chat.css'

import ChatUsers from '../ChatUsers/ChatUsers';
import ChatWindow from '../ChatWindow/ChatWindow';

function Chat({ users, messages, userName, room, onAddMessage }) {
  return (
      <div className="chat">
          <ChatUsers 
            users={users} 
            room={room}
          />
          <ChatWindow 
            messages={messages} 
            userName={userName} 
            room={room} 
            onAddMessage={onAddMessage}
          />
      </div>
  )
}

export default Chat;
