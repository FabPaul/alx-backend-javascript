export default function createIteratorObject(report) {
  let myArray = [];
  for (const idx of Object.values(report.allEmployees)) {
    myArray = [...myArray, ...idx];
  }
  return myArray;
}
