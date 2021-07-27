import { Seq } from 'immutable';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(object) {
  const good = Seq(object).filter((key) => key.score >= 70)
    .map((key) => ({
      score: key.score,
      firstName: capitalizeFirstLetter(key.firstName),
      lastName: capitalizeFirstLetter(key.lastName),
    }));
  console.log(good.toObject());
}
