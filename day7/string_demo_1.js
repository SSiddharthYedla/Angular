let str1 = 'Hello'; // string literals
let str2 = 'Hello'; // string literals

let str3 = new String('Hello'); // String Object
let str4 = new String('Hello'); // String Object

// Datatype
console.log(typeof str1); // string
console.log(typeof str2); // string

console.log(typeof str3); // object
console.log(typeof str4); // object

// compare
console.log(str1 == str2); // true
console.log(str1 == str3); // true
console.log(str3 == str4); // false