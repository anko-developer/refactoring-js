const people = [
  {
    name: 'wook',
    age: 36,
    salary: 10,
  },
  {
    name: 'ming',
    age: 33,
    salary: 20
  }
];

export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min(...people.map(p => p.age));
  }
  
  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}

console.log(reportYoungestAgeAndTotalSalary(people));