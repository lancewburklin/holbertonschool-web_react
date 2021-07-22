import React from 'react'
import PropTypes from 'prop-types'

class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

BodySection.defaultProps = {
  title: 'Pineapples'
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default BodySection;
