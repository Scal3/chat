import './Login.css';

import { useState } from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { onLogin } from '../../actions/actions'


import Button from '../UI/Button/Button';


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
        <form className="login__form" onSubmit={handleSubmit}>
          <div className='login__input-container'>
            <label htmlFor="room" className='login__input-label'>room</label>
            <input
              className='login__input'
              autoComplete='off'
              required
              value={room} 
              onChange={handleRoomInput} 
              id="room"
            />
          </div>
          <div className='login__input-container'>
            <label htmlFor="userName" className='login__input-label'>user name</label>
            <input 
              className='login__input'
              autoComplete='off'
              required
              value={userName} 
              onChange={handleNameInput} 
              id="userName"
            />
          </div>
          <Button>
            {isLoading ? 'Load...' : 'Enter'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
