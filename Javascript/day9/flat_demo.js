let arr1 = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr1, arr1.length); // 3

let arr2 = arr1.flat(); // depth=1
console.log(arr2, arr2.length); // 5

let arr3 = arr1.flat(2); // depth=2
console.log(arr3, arr3.length); // 7

let arr4 = arr1.flat(Infinity); // depth=n 
console.log(arr4, arr4.length); // 10