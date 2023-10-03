function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.filter((item) => item.location === city)
    .map((item) => {
      const grade = newGrades.find((grade) => grade.studentId === item.id);
        if (grade) {
          return {id: item.id, firstName: item.firstName, location: item.location, grade: grade.grade};
          } else {
              return {id: item.id, firstName: item.firstName, location: item.location, grade: "N/A"};
              }
    });
}

export default updateStudentGradeByCity;
