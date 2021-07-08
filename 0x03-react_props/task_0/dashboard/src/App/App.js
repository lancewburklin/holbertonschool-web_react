import './App.css';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
var React = require('react');

function App() {
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

export default App;
