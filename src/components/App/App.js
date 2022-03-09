import { useReducer, useEffect } from 'react'
import axios from 'axios';

import './App.css';

import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import socket from '../../utils/socket';
import reducer from '../../utils/reducer'


const App = () => {
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

  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    })
  }

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers)
    socket.on('ROOM:NEW_MESSAGE', addMessage)
  }, [])

  const onLogin = async (userData) => {
    dispatch({
      type: 'JOINED',
      payload: userData
    })
    socket.emit('ROOM:JOIN', userData)
    const { data } = await axios.get(`/rooms/${userData.room}`)
    console.log(data)
    dispatch({
      type: 'SET_DATA',
      payload: data.roomData
    }) // try/catch
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
        onAddMessage={addMessage}
        /> 
        :
        <Login onLogin={onLogin}/> 
      }
    </div>
  );
}

export default App;
