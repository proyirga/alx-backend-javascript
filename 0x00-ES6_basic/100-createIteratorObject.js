export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const result = [];
  for (const department in allEmployees) {
    for (const employee of allEmployees[department]) {
      result.push(employee);
    }
  }
  return resultSymbol.iterator;
}
