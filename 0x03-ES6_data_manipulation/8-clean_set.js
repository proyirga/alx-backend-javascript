function cleanSet(inputSet, startString = '') {
  // Check if startString is not a string
  if (typeof startString !== 'string') {
    return ''; // or throw an error, depending on your requirements
  }

  // Create an array to store all values of the set
  const allValues = Array.from(inputSet);

  // Filter the values based on startString
  const filteredValues = allValues
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length));

  // Join all values with "-"
  const resultString = filteredValues.join('-');

  return resultString;
}
