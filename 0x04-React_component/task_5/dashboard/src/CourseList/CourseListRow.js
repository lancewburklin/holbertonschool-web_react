import React from 'react'
import PropTypes from 'prop-types';

class CourseListRow extends React.Component {
  render() {
    const objProps = this.props;
    if (objProps.isHeader == true) {
      if (objProps.textSecondCell == null) {
        return (<tr><th colSpan='2'>{objProps.textFirstCell}</th></tr>)
      }
      return (
        <tr>
          <th>{objProps.textFirstCell}</th>
          <th>{objProps.textSecondCell}</th>
        </tr>
      );
    }
    return (
      <tr>
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
