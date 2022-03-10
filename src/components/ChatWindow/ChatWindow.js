// import React, { useRef, useEffect } from 'react';

// import './ChatWindow.css'

// import socket from '../../utils/socket';

// function ChatWindow({ messages, userName, room, onAddMessage }) {

//   const [chatMessage, setChatMessage] = React.useState('')

//   const messagesRef = useRef(null)

//   useEffect(() => {
//     messagesRef.current.scrollTo(0, 99999)
//   }, [messages])

//   // console.log(messages)

//   const handleTextarea = (event) => setChatMessage(event.target.value)

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     socket.emit('ROOM:NEW_MESSAGE', {
//       room,
//       userName, 
//       text: chatMessage
//     })
//     onAddMessage({userName, text: chatMessage})
//     setChatMessage('')
//   }

//   return (
//     <div className="chat-window">
//       <div className="chat-window__display" ref={messagesRef}>
//         { messages.length > 0 ? (
//           messages.map((message, i) => (
//             <div className="chat-window__message-container" key={i}> 
//               <span className="chat-window__message-user">{message.userName}</span>
//               <div className="chat-window__message-background">
//                 <p className="chat-window__message-text">{message.text}</p>
//               </div>
//             </div>
//           ))
//           ) : <p className="chat-window__message-empty">There are no messages in this chat...</p>
//         }
//       </div>
//       <form className="chat-window__form" onSubmit={handleSubmit}>
//         <textarea className="chat-window__text-area" type="text" placeholder="Enter your message" rows="1" value={chatMessage} onChange={handleTextarea}/>
//         <button className="chat-window__button" type="submit"></button>
//       </form>
//     </div>
//   )
// }

// export default ChatWindow;





import React, { useRef, useEffect } from 'react';

import './ChatWindow.css'

import socket from '../../utils/socket';

function ChatWindow({ messages, userName, room, onAddMessage }) {

  const [chatMessage, setChatMessage] = React.useState('')

  const messagesRef = useRef(null)

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999)
  }, [messages])

  // console.log(messages)

  const handleTextarea = (event) => setChatMessage(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('ROOM:NEW_MESSAGE', {
      room,
      userName, 
      text: chatMessage
    })
    onAddMessage({userName, text: chatMessage})
    setChatMessage('')
  }

  return (
    <div className="chat-window">
      <div className="chat-window__display" ref={messagesRef}>
        { messages.length > 0 ? (
          messages.map((message, i) => (
            message.userName === userName ? (
              <div className="chat-window__message-container chat-window__message-container_type_current-user" key={i}> 
              <div className="chat-window__message-background">
                <p className="chat-window__message-text">{message.text}</p>
              </div>
            </div>
            ) : (
              <div className="chat-window__message-container" key={i}> 
              <span className="chat-window__message-user">{message.userName}</span>
              <div className="chat-window__message-background">
                <p className="chat-window__message-text">{message.text}</p>
              </div>
            </div>
            )
          ))
          ) : <p className="chat-window__message-empty">There are no messages in this chat...</p>
        }
      </div>
      <form className="chat-window__form" onSubmit={handleSubmit}>
        <textarea className="chat-window__text-area" type="text" placeholder="Enter your message" rows="1" value={chatMessage} onChange={handleTextarea}/>
        <button className="chat-window__button" type="submit"></button>
      </form>
    </div>
  )
}

export default ChatWindow;
