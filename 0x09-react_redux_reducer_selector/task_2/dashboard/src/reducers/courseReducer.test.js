import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes'
import { courseReducer } from './courseReducer'

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
    expect(state).toEqual({})
  })
  it('Fetch course success', () => {
    const state = courseReducer(action);
    expect(state.data).toEqual(expected);
  })
  it('Select Course', () => {
    action.data = expected;
    expected[2].isSelected = true;
    action['index'] = 2;
    action.type = SELECT_COURSE;
    const state = courseReducer(action);
    expect(state.data).toEqual(expected);
  })
  it('Unselect Course', () => {
    expected[2].isSelected = false;
    action.type = UNSELECT_COURSE;
    const state = courseReducer(action);
    expect(state.data).toEqual(expected);
  })
})
