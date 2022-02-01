import React from 'react';

import './ChatUsers.css'

function ChatUsers({ users }) {

  console.log(users)

  return (
    <div className="chat-users">
      <h2 className="chat-users__heading">Online({users.length}):</h2>
      <ul className="chat-users__list">
        { users.map((user, i) => (
          <li key={i} className="chat-users__list-item">{user}</li>
        )) }
      </ul>
    </div>
  )
}

export default ChatUsers;
