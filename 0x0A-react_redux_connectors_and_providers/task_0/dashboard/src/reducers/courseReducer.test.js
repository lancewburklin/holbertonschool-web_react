import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes'
import { courseReducer } from './courseReducer'
import { fromJS, Map } from 'immutable'
import { courseNormalizer } from '../schema/courses'

describe('Course Reducer', () => {
  let action = {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  };

  let expected = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]

  it('InitialState', () => {
    const state = courseReducer();
    expect(state).toEqual(Map({}))
  })
  it('Fetch course success', () => {
    const state = courseReducer(Map({}), action);
    expect(state.toJS()).toEqual(courseNormalizer(expected));
  })
  it('Select Course', () => {
    const state = courseNormalizer(expected)
    const selectAction = {
      type: SELECT_COURSE,
      index: 2
    }
    const newState = courseReducer(fromJS(state), selectAction)
    expect(newState.toJS().entities.courses[2].isSelected).toEqual(true)
  })
  it('Unselect Course', () => {
    const state = courseNormalizer(expected)
    const selectAction = {
      type: UNSELECT_COURSE,
      index: 2
    }
    const newState = courseReducer(fromJS(state), selectAction)
    expect(newState.toJS().entities.courses[2].isSelected).toEqual(false)

  })
})
