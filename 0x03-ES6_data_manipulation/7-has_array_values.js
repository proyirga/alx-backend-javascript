function hasValuesFromArray(set, arr) {
  let hasAllValues = true;

  arr.forEach(element => {
    if (!set.has(element)) {
      hasAllValues = false;
    }
  });

  return hasAllValues;
}

export default hasValuesFromArray;
