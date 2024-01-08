export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  const cleanValues = [...set].map((str) => {
    if (str !== undefined && str.startsWith(startString)) {
      return str.slice(startString.length);
    }
    return '';
  });

  return cleanValues.filter(Boolean).join('-');
}
