import { SELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export function unSelectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

