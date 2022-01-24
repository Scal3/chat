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
    userName: null
  })

  useEffect(() => {
    socket.on('ROOM:JOINED', users => {
      console.log(users)
    })
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
      {state.joined ? <Chat/> : <Login onLogin={onLogin}/>}
    </div>
  );
}

export default App;
