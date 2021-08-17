import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape'
import NotificationItem from './NotificationItem'
import closeButton from '../assets/close-icon.png'

class Notifications extends React.PureComponent {
  NotificationList = (props) => {
    const items = props.items;
    if (items.length == 0) {
      return (<NotificationItem key={1} type="default" value="No Notifications" markAsRead={() => this.props.markNotificationAsRead(item.id)}/>)
    } else {
      return (
        items.map((item) =>
          <NotificationItem key={item.id} html={item.html} type={item.type} value={item.value} markAsRead={() => this.props.markNotificationAsRead(item.id)}/>
        )
      )
    }
  }
  render() {
  const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props
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
    <div id="Display" className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
    <div className={css(styles.Notifications)} style={notifyStyle}>
      <button id="Close" aria-label="Close" onClick={() => handleHideDrawer()} style={closeStyle}><img src={closeButton} style={imgStyle} alt="Close"/></button>
      <p className={css(styles.pStyle)}>Here is the list of notifications</p>
      <ul>
        <this.NotificationList items={listNotifications}/>
      </ul>
    </div>
    </>
  );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
}

function closeN() {
  console.log("Close button has been clicked");
}

const styles = StyleSheet.create({
  'Notifications': {
    position: 'relative',
    paddingTop: '1rem',
    border: '2px dotted #c7254e',
    marginBottom: '3rem',
    float: 'right'
  },
  menuItem: {
    textAlign: 'right',
    position: 'relative'
  },
  pStyle: {
    verticalAlign: 'middle'
  }
})

export default Notifications;
