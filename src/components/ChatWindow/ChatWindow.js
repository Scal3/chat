// import React from 'react';

// import './ChatWindow.css'

// function ChatWindow() {
//   return (
//     <div className="chat-window">
//       <div className="chat-window__display">
//         <div className="chat-window__message-container"> 
//           <span className="chat-window__message-user">Anton</span>
//           <div className="chat-window__message-background">
//             <p className="chat-window__message-text">Hello, guys!</p>
//           </div>
//         </div>
//         <div className="chat-window__message-container"> 
//           <span className="chat-window__message-user">Anton</span>
//           <div className="chat-window__message-background">
//             <p className="chat-window__message-text">Hello, guys!jkdsbvdsbvjdfbvdfjvbdflvdflnvdflksvnldfnvdflknvdlfk;nvl;dfnvdfvnkdfnvdfkvn</p>
//           </div>
//         </div>
//       </div>
//       <form className="chat-window__form">
//         <input className="chat-window__input" type="text" placeholder="Enter your message"/>
//         <button className="chat-window__button" type="submit"></button>
//       </form>
//     </div>
//   )
// }

// export default ChatWindow;



import React from 'react';

import './ChatWindow.css'

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window__display">
        <div className="chat-window__message-container"> 
          <span className="chat-window__message-user">Anton</span>
          <div className="chat-window__message-background">
            <p className="chat-window__message-text">Hello, guys!</p>
          </div>
        </div>
        <div className="chat-window__message-container"> 
          <span className="chat-window__message-user">Anton</span>
          <div className="chat-window__message-background">
            <p className="chat-window__message-text">Hello, guys!jkdsbvdsbvjdfbvdfjvbdflvdflnvdflksvnldfnvdflknvdlfk;nvl;dfnvdfvnkdfnvdfkvn</p>
          </div>
        </div>
      </div>
      <form className="chat-window__form">
        <textarea className="chat-window__text-area" type="text" placeholder="Enter your message"/>
        <button className="chat-window__button" type="submit"></button>
      </form>
    </div>
  )
}

export default ChatWindow;
