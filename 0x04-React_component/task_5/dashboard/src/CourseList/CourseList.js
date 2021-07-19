import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'
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
    <div className="App-body">
    <table id='CourseList'>
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

export default CourseList;
