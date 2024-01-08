export default function updateStudentGradeByCity(listOfObjects, city, newGrades) {
  const cityOfStudent = listOfObjects.filter((student) => student.location === city);

  const updateStudents = cityOfStudent.map((student) => {
    const grades = newGrades.find((grade) => grade.studentId === student.id);

    const finalGrades = grades ? grades.grade : 'N/A';

    return {
      ...student,
      grade: finalGrades,
    };
  });
  return updateStudents;
}
