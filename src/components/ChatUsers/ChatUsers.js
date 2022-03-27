import './ChatUsers.css'

import React from 'react';
import { useSelector } from 'react-redux'

import { getUsers, getRoom } from '../../selectors/selectors'

const ChatUsers = () => {
  const users = useSelector(getUsers)
  const room = useSelector(getRoom)

  return (
    <div className="chat-users">
      <div className='chat-users__menu'>
        <h2 className="chat-users__heading">Room: {room}</h2>
      </div>
      <div>
        {/* <h2 className="chat-users__heading">Online({users.length}):</h2>
        <ul className="chat-users__list">
          { users.map((user, i) => (
            <li key={i} className="chat-users__list-item">{user}</li>
          )) }
        </ul> */}
      </div>
    </div>
  )
}

export default ChatUsers;
