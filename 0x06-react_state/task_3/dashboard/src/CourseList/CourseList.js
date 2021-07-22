import { StyleSheet, css } from 'aphrodite';
import React from 'react'
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import { arrayOf } from 'prop-types'

function RowList(props) {
  const items = props.items;
  if (items.length == 0) {
    return ([<CourseListRow key='1' textFirstCell="No course available yet"/>]);
  }
  return (
    items.map((item) =>
      <CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit} />
    )
  )
}

class CourseList extends React.Component {
  render() {
  const items = this.props.listCourses;
  return (
    <div className={css(styles['App-body'])}>
    <table id='CourseList' className={css(styles.tstyle)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        <RowList items={items} />
      </tbody>
    </table>
    </div>
  )
  }
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  tstyle: {
    marginTop: '3rem',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black',
    borderCollapse: 'collapse'
  },
  'App-body': {
    height: '20rem',
    borderTop: '2px solid #c7254e',
    borderBottom: '2px solid #c7254e'
  }
})

export default CourseList;
