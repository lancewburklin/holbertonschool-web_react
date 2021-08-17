import { StyleSheet, css } from 'aphrodite';
var React = require('react');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogiSubmit = this.handleLogiSubmit.bind(this);
    this.handeChangeEmail = this.handeChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false
    };
  }
  handleLogiSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }
  handeChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
    if (this.state.password != "" && this.state.email != "") {
      this.setState({
        enableSubmit: true
      })
    }
  }
  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    })
    if (this.state.password != "" && this.state.email != "") {
      this.setState({
        enableSubmit: true
      })
    }
  }

  render() {
  const {isLoggedIn, email, password, enableSubmit} = this.state
  return (
    <React.Fragment>
      <div className={css(styles['App-body'])}>
      <p className={css(styles.pStyle)}>Login to access the full dashboard</p>
      <form className={css(styles.formStyle)}>
        <label className={css(styles.labelStyle)} htmlFor="emailInp">Email: </label>
        <input type="email" id="emailInp" value={email} onChange={this.handeChangeEmail}/>
        <label htmlFor="passInp">Password: </label>
        <input type="password" id="passInp" value={password} onChange={this.handleChangePassword}/>
        <button id="sub" className={css(styles.subButton)} onClick={this.handleLogiSubmit} type="submit" disabled={!enableSubmit}>OK</button>
      </form>
      </div>
    </React.Fragment>
  )
  }
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
