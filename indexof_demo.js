let str = 'entertainment';

console.log(str.indexOf('n')); // 1
console.log(str.indexOf('n', 2)); // 8
console.log(str.lastIndexOf('n')); // 11
console.log(str.lastIndexOf('w')); // -1

console.log(str.includes('men')); // true
console.log(str.includes('man')); // false

console.log(str.startsWith('ent')); // true
console.log(str.startsWith('ant')); // false

console.log(str.endsWith('ent')); // true
console.log(str.endsWith('ant')); // false
