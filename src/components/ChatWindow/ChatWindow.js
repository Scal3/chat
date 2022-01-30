import React from 'react';

import './ChatWindow.css'

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window__display">

      </div>
      <form className="chat-window__form">
        <input className="chat-window__input" type="text" placeholder="Enter your message"/>
        <button className="chat-window__button" type="submit"></button>
      </form>
    </div>
  )
}

export default ChatWindow;
