import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList'
var React = require('react');

class App extends React.Component {
  render() {
  if (this.props.isLoggedIn) {
    return (
      <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <CourseList />
        <Footer />
      </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <Notifications />
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
  isLoggedIn: PropTypes.bool
}

export default App;
