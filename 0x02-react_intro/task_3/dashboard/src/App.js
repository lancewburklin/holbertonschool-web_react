import './App.css';
import logo from './logo.jpg';
import { getFullYear } from './utils'
import { getFooterCopy } from './utils';

function App() {
  const footerCopy = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton-logo" className="Holb-logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="emailInp">Email: </label>
          <input type="email" id="emailInp" />
          <label htmlFor="passInp">Password: </label>
          <input type="password" id="passInp" />
          <input className="subButton" type="submit" value="OK" />
        </form>
      </div>
      <div className="App-footer">
        <p>{footerCopy}</p>
      </div>
    </div>
  );
}

export default App;
