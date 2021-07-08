import './Header.css';
import logo from '../assets/logo.jpg';
var React = require('react');

function Header() {
  return (
    <div className="App-header">
        <img src={logo} alt="Holberton-logo" className="Holb-logo" />
        <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
