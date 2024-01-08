export default function updateStudentGradeByCity(listOfObjects, city, newGrades) {
  const cityOfStudent = listOfObjects.filter((student) => student.location === city);

  const studentUpdate = cityOfStudent.map((student) => {
    const grades = newGrades.find((grade) => grade.idOfStudent === student.id);

    const updateGrade = grades ? grades.grade : 'N/A';

    return {
      ...student,
      grade: updateGrade,
    };
  });
  return studentUpdate;
}
