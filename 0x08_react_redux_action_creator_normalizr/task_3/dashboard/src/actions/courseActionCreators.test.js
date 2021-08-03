import { selectCourse, unSelectCourse } from './courseActionCreators'
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

describe('Action creators', () => {
  it('Select course', () => {
    const sCourse = selectCourse(1);
    expect(sCourse).toEqual(
      { type: SELECT_COURSE, index: 1 }
    );
  })
  it('Unselect Course', () => {
    const unCourse = unSelectCourse(1);
    expect(unCourse).toEqual(
      { type: UNSELECT_COURSE, index: 1 }
    )
  })
})
