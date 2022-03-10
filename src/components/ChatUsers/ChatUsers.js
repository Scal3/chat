import './ChatUsers.css'

import React from 'react';
import { useSelector } from 'react-redux'

import { getUsers, getRoom } from '../../selectors/selectors'

const ChatUsers = () => {
  const users = useSelector(getUsers)
  const room = useSelector(getRoom)

  return (
    <div className="chat-users">
      <h2 className="chat-users__heading">Комната: {room}</h2>
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
