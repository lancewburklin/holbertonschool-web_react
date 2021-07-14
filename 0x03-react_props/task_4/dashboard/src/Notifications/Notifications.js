import React from 'react';
import PropTypes from 'prop-types'
import './Notifications.css'
import NotificationItem from './NotificationItem'
import closeButton from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

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
  const note = { __html: getLatestNotification() };
  return (
    <>
    <div className="menuItem">Your notifications</div>
    <div className="Notifications" style={notifyStyle}>
      <button aria-label="Close" onClick={closeN} style={closeStyle}><img src={closeButton} style={imgStyle} alt="Close"/></button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={note} />
      </ul>
    </div>
    </>
  );
  }
}

Notifications.defaultProps = {
  displayDrawer: false
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

function closeN() {
  console.log("Close button has been clicked");
}

export default Notifications;
