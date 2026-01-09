let arr = [10, 20, 30, 10, 10, 10, 20, 20, 20, 30, 30];

let uniqueSet = new Set(arr);
console.log(uniqueSet);

let uniqueArr = [...uniqueSet];
console.log(uniqueArr)