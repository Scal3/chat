import './App.css';
import Login from '../Login/Login';
import socket from '../../utils/socket';
import { useReducer } from 'react'
import reducer from '../../utils/reducer'


function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false
  })

  const onLogin = () => {
    dispatch({
      type: 'JOINED',
      payload: true
    })
  }

  return (
    <div className="app">
      {!state.joined && <Login onLogin={onLogin} />}
    </div>
  );
}

export default App;
