import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');
const mySchema = [course]

export function courseNormalizer(data) {
  return normalize(data, mySchema);
}
