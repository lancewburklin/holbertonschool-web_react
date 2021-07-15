import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'
var React = require('react');

function logKey(e) {
  console.log(e.code);
}

class App extends React.Component {
  render() {
  document.addEventListener("keydown", logKey);
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
  if (this.props.isLoggedIn) {
    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        <CourseList listCourses={listCourses}/>
        <Footer />
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
      </React.Fragment>
    );
  }
  }
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
