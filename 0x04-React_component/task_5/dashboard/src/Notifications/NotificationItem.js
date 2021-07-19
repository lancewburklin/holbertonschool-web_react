import React from 'react';
import PropTypes from 'prop-types'

class NotificationItem extends React.PureComponent {
  render() {
  const p = this.props
  return (
    <li data-notification-type={p.type} dangerouslySetInnerHTML={p.html} onClick={p.markAsRead}>{p.value}</li>
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

export default NotificationItem;
