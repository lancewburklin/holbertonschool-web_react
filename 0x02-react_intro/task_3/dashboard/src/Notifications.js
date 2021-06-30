import React from 'react';
import './Notifications.css'
import closeButton from './close-icon.png'
import { getLatestNotification } from './utils'

function Notifications() {
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
  const note = getLatestNotification();
  return (
    <div className="Notifications">
      <button aria-label="Close" onClick={closeN} style={closeStyle}><img src={closeButton} style={imgStyle} alt="Close"/></button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: note}} />
      </ul>
    </div>
  );
}

function closeN() {
  console.log("Close button has been clicked");
}

export default Notifications;
