function cleanSet(inputSet, startString = '') {
  if (typeof startString !== 'string') {
    return '';
  }
  // Create an array to store the filtered values
  const filteredValues = [];

  // Iterate over the set elements
  inputSet.forEach(value => {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string (after startString) to the array
      filteredValues.push(value.slice(startString.length));
    }
  });

  // Join the filtered values with "-"
  const resultString = filteredValues.join('-');

  return resultString;
}

export default cleanSet;
