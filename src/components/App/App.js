import './App.css';
import Login from '../Login/Login';
import socket from '../../utils/socket';
import { useReducer } from 'react'
import reducer from '../../utils/reducer'


function App() {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false
  })

  const onLogin = () => {
    dispatch({
      type: 'IS_AUTH',
      payload: true
    })
  }

  return (
    <div className="app">
      {!state.isAuth && <Login onLogin={onLogin} />}
    </div>
  );
}

export default App;
