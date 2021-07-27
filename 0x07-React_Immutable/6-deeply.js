import { Map, mergeDeep } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  return Map(mergeDeep(page1, page2));
}
