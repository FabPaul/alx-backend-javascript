export default function appendToEachArrayValue(array, appendString) {
  const myArray = array;
  for (const idx of array) {
    const value = array.indexOf(idx);
    myArray[value] = appendString + idx;
  }

  return array;
}
