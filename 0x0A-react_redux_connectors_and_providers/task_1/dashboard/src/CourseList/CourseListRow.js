import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
  const [marked, setMarked] = useState(false);
  const objProps = props;
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
  function boxMarked() {
    setMarked(!marked);
  }
  let theStyle;
  if (marked) {
    theStyle = styles.rowChecked;
  } else {
    theStyle = styles.trStyle;
  }
  return (
    <React.Fragment>
      <tr className={css(theStyle)}>
        <td ><input type="checkbox" onChange={boxMarked}/>{objProps.textFirstCell}</td>
        <td>{objProps.textSecondCell}</td>
      </tr>
    </React.Fragment>
  )
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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
})

export default CourseListRow;
