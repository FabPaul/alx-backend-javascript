export default function getStudentIdsSum(listOfObjects) {
  return listOfObjects.reduce((accum, object) => accum + object.id, 0);
}
