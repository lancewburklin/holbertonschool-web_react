import PropTypes from 'prop-types'

const HTMLShape = PropTypes.shape({
  __html: PropTypes.string
})

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: HTMLShape,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
})

export default NotificationItemShape;
