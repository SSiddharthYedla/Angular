// spread  - spread array/object to individual values
console.log(Math.max(10, 20, 30, 40, 50)); // 50

let arr = [10, 20, 30, 40, 50]
console.log(Math.max(arr)); // NaN

console.log(Math.max(...arr));  // 50



let arr1 = [100, 200];
let arr2 = [...arr1]; // shallow copy