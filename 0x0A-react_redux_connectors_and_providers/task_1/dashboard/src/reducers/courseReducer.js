import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes'
import { toJS, fromJS, Map } from 'immutable'
import { courseNormalizer } from '../schema/courses'

const initalState = Map({})

export function courseReducer(state = initalState, action) {
  if (!action) {
    return initalState;
  }
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      let allCourses = action.data.map((course) => ({
        ...course,
        isSelected: false
      }))
      allCourses = courseNormalizer(allCourses)
      return state.merge(allCourses);
    }
    case SELECT_COURSE: {
      return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], true);
    }
    case UNSELECT_COURSE: {
      return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], false);
    }
    default:
      return initalState;
  }
}
