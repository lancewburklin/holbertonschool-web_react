import './App.css';
import logo from './logo.jpg';
import { getFullYear } from './utils'
import { getFooterCopy } from './utils';

function App() {
  const footerCopy = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton-logo" className="Holb-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="emailInp">Email: </label>
          <input type="email" id="emailInp" />
          <label for="passInp">Password: </label>
          <input type="password" id="passInp" />
          <input className="subButton" type="submit" value="OK" />
        </form>
      </body>
      <footer className="App-footer">
        <p>{footerCopy}</p>
      </footer>
    </div>
  );
}

export default App;
