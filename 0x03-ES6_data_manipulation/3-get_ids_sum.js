function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }

  return list.reduce((sum, item) => sum + item.id, 0);
}

export default getStudentIdsSum;
