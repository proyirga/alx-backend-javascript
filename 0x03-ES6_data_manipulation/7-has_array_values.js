function hasValuesFromArray(set, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
