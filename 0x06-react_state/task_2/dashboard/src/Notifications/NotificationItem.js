import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
  const p = this.props
  let pType;
  if (p.type == "urgent") {
    pType = styles.urgent;
  } else {
    pType = styles.normal;
  }
  return (
    <li data-notification-type={p.type} dangerouslySetInnerHTML={p.html} onClick={p.markAsRead} className={css(pType)}>{p.value}</li>
  );
  }
}

const HTMLShape = PropTypes.shape({
  __html: PropTypes.string
})

NotificationItem.defaultProps = {
  markAsRead: function () {}
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: HTMLShape,
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

const styles = StyleSheet.create({
  normal: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
})

export default NotificationItem;
