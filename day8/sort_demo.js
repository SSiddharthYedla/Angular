let arr1 = [20, 40, 10, 50, 30];
arr1.sort();
console.log(arr1);

let arr2 = ['Tata', 'Honda', 'Maruti', 'Hyundai']
arr2.sort();
console.log(arr2)

let arr3 = [10, 101, 9, 7, 6, 105, 8, 91, 103, 92, 93, 94]
arr3.sort();
console.log(arr3);

// Numeric Sort
arr3.sort((a, b) => a - b);
console.log(arr3)

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
employees.sort();
console.log(employees)
employees.sort((e1, e2) => e1.eId - e2.eId);
console.log(employees)