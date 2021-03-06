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
import { uiReducer } from '../reducers/uiReducer'
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'

var React = require('react');

const note = { __html: getLatestNotification() };

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      user: defUser,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: "New course available"},
        {id: 2, type: 'urgent', value: "New resume available"},
        {id: 3, type: 'urgent', html: note}
      ]
    }
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
  markNotificationAsRead(id) {
    let noti = this.state.listNotifications
    noti = noti.filter((el) => { return el.id != id })
    this.setState({
      listNotifications: noti,
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
  testLogIn() {
    if (this.state.user.isLoggedIn) {
      return (
        <BodySectionWithMarginBottom title="Course List">
          <CourseList listCourses={listCourses}/>
        </BodySectionWithMarginBottom>
      )
    } else {
      return (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={this.logIn}/>
        </BodySectionWithMarginBottom>
      )
    }
  }
  render() {
  const {user, logOut} = this.state;
  const { displayDrawer } = this.props;
  return (
    <React.Fragment>
    <Notifications
    markNotificationAsRead={this.markNotificationAsRead}
    listNotifications={this.state.listNotifications}
    displayDrawer={displayDrawer}
    handleDisplayDrawer={this.props.displayNotificationDrawer}
    handleHideDrawer={this.props.hideNotificationDrawer}/>
    <div className="App">
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
      <Header />
        {this.testLogIn()}
      <BodySection title="News from the School">
        <p>Pineapples</p>
      </BodySection>
      <Footer />
      </AppContext.Provider>
    </div>
    </React.Fragment>
  )
  }
}

App.defaultProps = {
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {}
}

App.propTypes = {
}
// ["StyleSheet.create({", "body: {", "footer: {"] -

const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer())
  }
}

export const mapStateToProps = (state) => {
  return ({
    isLoggedIn: state.toJS().isUserLoggedIn,
    displayDrawer: state.toJS().isNotificationDrawerVisible
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
