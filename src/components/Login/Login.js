import './Login.css';
import { useState } from 'react'
import axios from 'axios'


function Login({ onLogin }) {

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
      .then(onLogin(userData))
      .catch(err => console.log(err)) // !!!
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        className="login__input"
        name="roomId" type="text" 
        placeholder="Room id" 
        value={room} 
        onChange={handleRoomInput} />
      <input 
        className="login__input" 
        name="name" type="text" 
        placeholder="Name" 
        value={userName} 
        onChange={handleNameInput} />
      <button className="login__submit" type="submit" disabled={isLoading}>
        {isLoading ? 'Load...' : 'Enter'}
      </button>
      <div>Loading...</div>
    </form>
  );
}

export default Login;
