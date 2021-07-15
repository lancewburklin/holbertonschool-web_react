import './Login.css';
var React = require('react');

function Login() {
  return (
    <React.Fragment>
      <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="emailInp">Email: </label>
        <input type="email" id="emailInp" />
        <label htmlFor="passInp">Password: </label>
        <input type="password" id="passInp" />
        <button className="subButton" type="submit">OK</button>
      </form>
      </div>
    </React.Fragment>
  )
}

export default Login;
