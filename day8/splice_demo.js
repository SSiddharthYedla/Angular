// splice(index , #elements to remove , ...elements to add)
// splice  1. Only Delete         2. Only Add      3. Both delete & Add

let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // only delete
console.log(arr);  // [10,40,50]

arr.splice(1, 0, 20, 30); // only add
console.log(arr); // [10, 20, 30, 40, 50]

arr.splice(1, 3, 25, 35, 45); // both delete & add
console.log(arr); // [10, 25, 35, 45, 50]

let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];
let modifiedCars = cars.toSpliced(1, 2);
console.log(cars)
console.log(modifiedCars)