let arr = [10, 20, 30];
console.log('Before Push:: ', arr);
arr.push(40, 50);
console.log('After Push:: ', arr);
arr.pop()
console.log('After pop:: ', arr);
arr.unshift(50);
console.log('After unshift:: ', arr); //  [ 50, 10, 20, 30, 40 ]
arr.shift(); //  [  10, 20, 30, 40 ]