import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class CourseListRow extends React.Component {
  render() {
    const objProps = this.props;
    if (objProps.isHeader == true) {
      if (objProps.textSecondCell == null) {
        return (<tr className={css(styles.hrStyle)}><th colSpan='2'>{objProps.textFirstCell}</th></tr>)
      }
      return (
        <tr className={css(styles.hrStyle)}>
          <th>{objProps.textFirstCell}</th>
          <th>{objProps.textSecondCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(styles.trStyle)}>
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

const styles = StyleSheet.create({
  trStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  hrStyle: {
    backgroundColor: '#deb5b545'
  }
})

export default CourseListRow;
