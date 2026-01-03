let str = 'This is Javascript Class';


console.log(str.split('')); // ['T', 'h', 'i', 's'....]
console.log(str.split(' ')); // [ 'This', 'is', 'Javascript', 'Class' ]
console.log(str.split('Java')); // [ 'This is ', 'script Class' ]
console.log(str.split('python')); // [ 'This is Javascript Class' ]
console.log(str.split('This')); // [ '',' is Javascript Class' ]
console.log(str.split('Class')); // [ 'This is Javascript ','' ]