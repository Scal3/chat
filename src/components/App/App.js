import { useReducer, useEffect } from 'react'
import axios from 'axios';

import './App.css';

import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import socket from '../../utils/socket';
import reducer from '../../utils/reducer'


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
