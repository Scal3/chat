import { useReducer, useEffect } from 'react'
import axios from 'axios';

import './App.css';

import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import socket from '../../utils/socket';
import reducer from '../../utils/reducer'



window.onload = function() {
  // Get a reference to the div on the page that will display the
  // message text.
  var messageEle = document.getElementById('message');

  // A function to process messages received by the window.
  function receiveMessage(e) {
    // Check to make sure that this message came from the correct domain.
    if (e.origin !== "http://127.0.0.1:5500/")
      return;

    // Update the div element to display the message.
    messageEle.innerHTML = "Message Received: " + e.data;

    console.log('ss')
  }

  // Setup an event listener that calls receiveMessage() when the window
  // receives a new MessageEvent.
  window.addEventListener('message', receiveMessage);
}




function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    room: null,
    userName: null,
    users: [],
    messages: []
  })


  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    })
  }

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers)
    socket.on('ROOM:NEW_MESSAGE', message => {
      dispatch({
        type: 'NEW_MESSAGE',
        payload: message
      })
    })
  }, [])

  const onLogin = async (userData) => {
    dispatch({
      type: 'JOINED',
      payload: userData
    })
    socket.emit('ROOM:JOIN', userData)
    const { data } = await axios.get(`/rooms/${userData.room}`)
    setUsers(data.roomData.users) // try/catch
  }

  return (
    <div className="app">
      { state.joined
        ? 
        <Chat
        users={state.users}
        messages={state.messages}
        userName={state.userName}
        room={state.room}
        /> 
        :
        <Login onLogin={onLogin}/> 
      }
    </div>
  );
}

export default App;
