import './Login.css';

import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Button, TextField, Input } from '@mui/material';


import { onLogin } from '../../actions/actions'


const Login = () => {
  const dispatch = useDispatch()

  const [room, setRoom] = useState('')
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRoomInput = (event) => {
    setRoom(event.target.value)
  }

  const handleNameInput = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!room.trim() || !userName.trim()) {
      console.log('Error, missing data!') // !!!
      return
    }
    const userData = {
      room,
      userName
    }
    setIsLoading(true)
    axios.post('/rooms', userData)
      .then(dispatch(onLogin(userData)))
      .catch(err => console.log(err)) // !!!
  }

  return (
    <div className="login">
      <h1 className='login__heading'>CHAT</h1>
      <div className="login__content">
        <h2 className="login__form-heading">Hello, stranger</h2>
        <form className="login__form">
          <TextField
            autoComplete='off'
            required
            value={room} 
            onChange={handleRoomInput} 
            label="Room id" 
            variant="standard"
          />
          <TextField 
            autoComplete='off'
            required
            margin="dense" 
            value={userName} 
            onChange={handleNameInput} 
            label="Name" 
            variant="standard"
          />
          <Button 
            variant="text" 
            size="small" 
            disabled={isLoading} 
            onClick={handleSubmit}
          >
            {isLoading ? 'Load...' : 'Enter'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
