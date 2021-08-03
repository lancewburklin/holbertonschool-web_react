import data from '../../notifications.json'
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity('messages', {},  {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
})

const schem = [notification]

export const info = normalize(data, schem);

export function getAllNotificationsByUser(userId) {
  let allNotifications = [];
  const users = info.entities.notifications;
  for (let k in users) {
    if (users[k].author == userId) {
      allNotifications.push(info.entities.messages[users[k].context]);
    }
  }
  return allNotifications;
}
