import React from 'react'
import PropTypes from 'prop-types';

const trStyle = {
  backgroundColor: '#f5f5f5ab'
}

const hrStyle = {
  backgroundColor: '#deb5b545'
}

class CourseListRow extends React.Component {
  render() {
    const objProps = this.props;
    if (objProps.isHeader == true) {
      if (objProps.textSecondCell == null) {
        return (<tr style={hrStyle}><th colSpan='2'>{objProps.textFirstCell}</th></tr>)
      }
      return (
        <tr style={hrStyle}>
          <th>{objProps.textFirstCell}</th>
          <th>{objProps.textSecondCell}</th>
        </tr>
      );
    }
    return (
      <tr style={trStyle}>
        <td>{objProps.textFirstCell}</td>
        <td>{objProps.textSecondCell}</td>
      </tr>
    )
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: 'Pineapples',
  textSecondCell: null
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default CourseListRow;
