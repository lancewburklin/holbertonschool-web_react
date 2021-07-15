import React from 'react';
import PropTypes from 'prop-types'
import './Notifications.css'
import NotificationItemShape from './NotificationItemShape'
import NotificationItem from './NotificationItem'
import closeButton from '../assets/close-icon.png'

function NotificationList(props) {
  const items = props.items;
  if (items.length == 0) {
    return (<NotificationItem type="default" value="New course available"/>)
  } else {
    return (
      items.map((item) =>
        <NotificationItem key={item.id} html={item.html} type={item.type} value={item.value}/>
      )
    )
  }
}

class Notifications extends React.Component {
  render() {
  const closeStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    height: '1rem',
    width: '1rem'
  };
  const imgStyle = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    height: '100%',
    width: '100%',
  }
  let notifyStyle;
  if (this.props.displayDrawer) {
    notifyStyle = {
      display: 'block'
    }
  } else {
    notifyStyle = {
      display: 'none'
    }
  }
  return (
    <>
    <div className="menuItem">Your notifications</div>
    <div className="Notifications" style={notifyStyle}>
      <button aria-label="Close" onClick={closeN} style={closeStyle}><img src={closeButton} style={imgStyle} alt="Close"/></button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationList items={this.props.listNotifications}/>
      </ul>
    </div>
    </>
  );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

function closeN() {
  console.log("Close button has been clicked");
}

export default Notifications;
