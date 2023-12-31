function getStudentsByLocation(list, city) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.filter((item) => item.location === city);
}

export default getStudentsByLocation;
