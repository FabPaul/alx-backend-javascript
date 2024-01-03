export default function createReoirtObject(employeeList) {
  return {
    allEmployees: {
      ...employeeList,
    },
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeeList).length;
    },
  };
}
