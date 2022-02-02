import './App.css';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import socket from '../../utils/socket';
import { useReducer, useEffect } from 'react'
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
    socket.on('ROOM:JOINED', setUsers)
    socket.on('ROOM:SET_USERS', setUsers)
  }, [])

  const onLogin = (userData) => {
    dispatch({
      type: 'JOINED',
      payload: userData
    })
    socket.emit('ROOM:JOIN', userData)
  }

  return (
    <div className="app">
      {state.joined ? <Chat users={state.users} messages={state.messages}/> : <Login onLogin={onLogin}/>}
    </div>
  );
}

export default App;
