import { StyleSheet, css } from 'aphrodite';
var React = require('react');

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles['App-body'])}>
      <p className={css(styles.pStyle)}>Login to access the full dashboard</p>
      <form className={css(styles.formStyle)}>
        <label className={css(styles.labelStyle)} htmlFor="emailInp">Email: </label>
        <input type="email" id="emailInp" />
        <label htmlFor="passInp">Password: </label>
        <input type="password" id="passInp" />
        <button className={css(styles.subButton)} type="submit">OK</button>
      </form>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  'App-body': {
    height: '20rem',
    borderTop: '2px solid #c7254e',
    borderBottom: '2px solid #c7254e'
  },
  pStyle: {
    marginTop: '2rem',
    marginLeft: '2rem'
  },
  formStyle: {
    marginLeft: '1rem'
  },
  labelStyle: {
    marginLeft: '1rem'
  },
  subButton: {
    marginLeft: '1rem'
  }
})

export default Login;
