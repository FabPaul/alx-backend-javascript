export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot Process');
  }

  const updateMap = new Map();

  map.forEach((value, key) => {
    if (value === 1) {
      updateMap.set(key, 100);
    } else {
      updateMap.set(key, value);
    }
  });

  return updateMap;
}
