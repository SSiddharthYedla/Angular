let str = 'Hello World';

console.log(str.length);  // 11
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str[1]); // e
console.log(str.charAt(1)); // e
console.log(str.at(1)); // e

console.log(str[-1]); // 
console.log(str.charAt(-1)); // 
console.log(str.at(-1)); // e

console.log('charCodeAt: ', str.charCodeAt(1)); // e = 101
console.log('virat'.concat(' Kohli'));