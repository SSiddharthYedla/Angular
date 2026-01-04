

let employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

//1. declare array of employees & sort them in ascending order (empId)

const sortByIdAsc = [...employees].sort((a, b) => a.eId - b.eId);
console.log(sortByIdAsc);

// 2. declare array of employees & sort them in ascending order by name.
let sortByName = [...employees].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log("2. Sort by name:", sortByName);

// 3. declare array of employees & filter the employees whose sal>6000;
let salaryAbove6000 = employees.filter(emp => emp.sal > 6000);
console.log("3. Salary > 6000:", salaryAbove6000);

// 4. declare array of employees & increase sal of every employee by 500;
let add500Salary = employees.map(emp => ({
  ...emp,
  sal: emp.sal + 500
}));
console.log("4. Salary +500:", add500Salary);

// 5. declare array of employees & increase sal of every employee 10%
let add10PercentSalary = employees.map(emp => ({
  ...emp,
  sal: emp.sal * 1.10
}));
console.log("5. Salary +10%:", add10PercentSalary);

// 6. declare array of employees & add "comp:ibm" to every employee;
	   let addCompany = employees.map(emp => ({
  ...emp,
  comp: "ibm"
}));
console.log("6. Add company:", addCompany);

// 7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]

let deptLookup = departments.reduce((acc, d) => {
  acc[d.eId] = d.dept;
  return acc;
}, {});

let employeesWithDept = employees.map(emp => ({
  ...emp,
  dept: deptLookup[emp.eId]
}));

console.log("7. Employees with dept:", employeesWithDept);


// 8. WAP to print the occurance of each elements 
    // input = [10,20,30,40,50,10,30,50]
	// output = {10:2, 20:1, 30:2 , 40:1, 50:2}

  let numbers = [10, 20, 30, 40, 50, 10, 30, 50];

let occurrence = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log("8. Occurrence:", occurrence);

// 9. declare array of employees & groupBy employees-name
    // sample output: {
		// 'sanjay' : [{},{}],
		// 'alok' : [{}]
	// }
let groupByName = employees.reduce((acc, emp) => {
  if (!acc[emp.name]) {
    acc[emp.name] = [];
  }
  acc[emp.name].push(emp);
  return acc;
}, {});

console.log("9. Group by name:", groupByName);

// 10. Find the total salary of all 'Male' employees 
let totalMaleSalary = employees
  .filter(emp => emp.gender === "male")
  .reduce((sum, emp) => sum + emp.sal, 0);

console.log("10. Total Male Salary:", totalMaleSalary);


