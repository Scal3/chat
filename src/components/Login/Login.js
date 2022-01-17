import './Login.css';
import socket from '../../utils/socket';

function Login() {

  return (
    <form className="login">
        <input className="login__input" name="roomId" type="text" placeholder="Room id" />
        <input className="login__input" name="name" type="text" placeholder="Name" />
        <button className="login__submit" type="submit">Enter</button>
    </form>
  );
}

export default Login;
