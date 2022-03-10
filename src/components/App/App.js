import './App.css';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import socket from '../../utils/socket';
import { setUsers, addMessage } from '../../actions/actions'
import { getJoined } from '../../selectors/selectors'


const App = () => {
  const dispatch = useDispatch()

  const joined = useSelector(getJoined)

  useEffect(() => {
    socket.on('ROOM:SET_USERS', (users) =>{
      dispatch(setUsers(users))
    })
    socket.on('ROOM:NEW_MESSAGE', (message) => {
      dispatch(addMessage(message))
    })
  }, [])

  return (
    <div className="app">
      { joined
        ? 
        <Chat/> 
        :
        <Login/> 
      }
    </div>
  );
}

export default App;
