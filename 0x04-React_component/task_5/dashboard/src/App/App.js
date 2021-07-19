import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection'
var React = require('react');


class App extends React.Component {
  logKey = (e) => {
  if (e.ctrlKey) {
    if (e.keyCode == 72) {
      alert('Logging you out');
      this.props.logOut();
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
        <BodySectionWithMarginBottom title="Course List">
          <CourseList listCourses={listCourses}/>
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Pineapples</p>
        </BodySection>
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
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Pineapples</p>
        </BodySection>
        <Footer />
      </div>
      </React.Fragment>
    );
  }
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: function() {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
