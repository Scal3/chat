import './App.css';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch } from 'react-router-dom'

import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import socket from '../../utils/socket';
import { setUsers, addMessage } from '../../actions/actions'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('ROOM:SET_USERS', (users) =>{
      dispatch(setUsers(users))
    })
    socket.on('ROOM:NEW_MESSAGE', (message) => {
      dispatch(addMessage(message))
    })
  }, [])

  // return (
  //   <div className="app">
  //     <Switch>
  //         <ProtectedRoute
  //           component={Login} 
  //           isItAnAuthorizationComponent={true} 
  //           path="/login" 
  //           redirectPath="/" 
  //         />
  //         <ProtectedRoute
  //           component={Chat} 
  //           isItAnAuthorizationComponent={false} 
  //           path="/" 
  //           redirectPath="/login" 
  //         />
  //     </Switch>
  //   </div>
  // );
  return (
    <div className="app">
      <Switch>
          <ProtectedRoute
            component={Chat} 
            isItAnAuthorizationComponent={true} 
            path="/login" 
            redirectPath="/" 
          />
      </Switch>
    </div>
  );
}

export default App;
