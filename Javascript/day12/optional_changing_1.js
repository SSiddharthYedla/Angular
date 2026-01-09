let user = { name: 'deepak' }
// console.log(user.address.city); // Cannot read properties of undefined

console.log(user.address); // undefined
// console.log(user.address.city); // Error
console.log(user?.address?.city);

console.log('Code at the end')

let arr = [10, 20, 30];
console.log(arr[5]);
console.log(arr[0][0]);

function checkIfEveryElementAreEven(arr) {
    return arr?.every(ele => ele % 2 == 0);
}
let nums;
console.log(checkIfEveryElementAreEven(nums));

console.log('testtttttttt')