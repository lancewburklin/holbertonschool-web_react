import './Footer.css';
import { getFullYear } from '../utils/utils'
import { getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext'
import { StyleSheet, css } from 'aphrodite';
var React = require('react');

function Footer() {
  function contact(info) {
    if (info.user.isLoggedIn) {
      return (<a className={css(styles.center)}>Contact us</a>)
    }
  }
  const footerCopy = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
  return (
    <AppContext.Consumer>
    {(info) => (
    <div className="App-footer">
      <p>{footerCopy}</p>
      {contact(info)}
    </div>
    )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  center: {
    display: 'block',
    textAlign: 'center',
  }
})

export default Footer;
