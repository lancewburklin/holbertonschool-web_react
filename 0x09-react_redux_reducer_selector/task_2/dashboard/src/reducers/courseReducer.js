import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes'

const initalState = {}

export function courseReducer(action) {
  if (!action) {
    return initalState;
  }
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      for (const item of action.data) {
        item['isSelected'] = false
      }
      return action;
    }
    case SELECT_COURSE: {
      for (const item of action.data) {
        if (item.id == action.index) {
          item['isSelected'] = true
        }
      }
      return action;
    }
    case UNSELECT_COURSE: {
      for (const item of action.data) {
        if (item.id == action.index) {
          item['isSelected'] = false
        }
      }
      return action;
    }
    default:
      return initalState;
  }
}
