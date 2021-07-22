import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection'
import { defUser, AppContext } from './AppContext'
var React = require('react');


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user: defUser,
      logOut: this.logOut
    }
  }
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }
  logIn(email, password) {
    this.setState({
      user: {email, password, isLoggedIn: true}
    })
  }
  logOut() {
    this.setState({
      user: defUser
    })
  }
  logKey = (e) => {
  if (e.ctrlKey) {
    if (e.keyCode == 72 && this.state.user.isLoggedIn){
      alert('Logging you out');
      this.logOut();
    }
  }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.logKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.logKey);
  }
  render() {
  const {displayDrawer, user, logOut} = this.state;
  const note = { __html: getLatestNotification() };
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]
  const listNotifications = [
    {id: 1, type: 'default', value: "New course available"},
    {id: 2, type: 'urgent', value: "New resume available"},
    {id: 3, type: 'urgent', html: note}
  ]
  if (user.isLoggedIn) {
    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
      <div className="App">
        <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Header />
        <BodySectionWithMarginBottom title="Course List">
          <CourseList listCourses={listCourses}/>
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Pineapples</p>
        </BodySection>
        <Footer />
        </AppContext.Provider>
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
      <div className="App">
        <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Header />
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={this.logIn}/>
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
          <p>Pineapples</p>
        </BodySection>
        <Footer />
        </AppContext.Provider>
      </div>
      </React.Fragment>
    );
  }
  }
}

App.defaultProps = {
}

App.propTypes = {
}
// ["StyleSheet.create({", "body: {", "footer: {"] -

export default App;
