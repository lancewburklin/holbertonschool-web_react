import data from '../../notifications.json'

export default function getAllNotificationsByUser(userId) {
  let con = data.filter((info) => info.author.id == userId)
  con = con.map((info) => info.context)
  return (con);
}
