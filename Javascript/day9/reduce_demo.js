let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 0);
console.log('Sum::', sum);


// Reverse a string using reduce
let str = 'HELLO';
let revStr = str.split('').reduce((prev, curr) => {
    console.log(prev, curr)
    return curr + prev;
}, '');
console.log(revStr);

//  occurance
let numArr = [10, 20, 10, 30, 10, 40, 20, 30, 20];
let obj = numArr.reduce((obj, val) => {
    if (obj[val]) {
        obj[val] = obj[val] + 1;
    } else {
        obj[val] = 1;
    }
    return obj;
}, {});
console.log(obj)