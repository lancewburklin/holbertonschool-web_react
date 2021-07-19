import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
var React = require('react');

function Header() {
  return (
    <div className="App-header">
        <img src={logo} alt="Holberton-logo" className={css(styles["Holb-logo"])} />
        <h1 className={css(styles.h1T)}>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  'Holb-logo': {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '10rem',
    width: '10rem'
  },
  h1T: {
    verticalAlign: 'middle',
    display: 'inline-block',
    color: '#c7254e'
  }
})

export default Header;
