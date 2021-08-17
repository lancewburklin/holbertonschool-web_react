import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import { AppContext } from '../App/AppContext';
var React = require('react');

function Header() {
  function testLog(context) {
    if (context.user) {
    if (context.user.isLoggedIn) {
      return (
        <p className="LogoutSection">Welcome {context.user.email} <a onClick={context.logOut}>logout</a></p>
      );
    }
  }
  }
  return (
    <AppContext.Consumer>
    {(context) => (
    <div className="App-header">
        {testLog(context)}
        <img src={logo} alt="Holberton-logo" className={css(styles["Holb-logo"])} />
        <h1 className={css(styles.h1T)}>School dashboard</h1>
    </div>
    )}
    </AppContext.Consumer>
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
