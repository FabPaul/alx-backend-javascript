export default function (listOfObjects) {
  if (Array.isArray(listOfObjects)) {
    return listOfObjects.map((object) => object.id);
  }
  return [];
}
