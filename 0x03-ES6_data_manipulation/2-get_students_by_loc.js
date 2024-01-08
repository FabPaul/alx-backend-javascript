export default function getStudentsByLocation(listOfObjects, city) {
  return listOfObjects.filter((object) => object.location === city);
}
