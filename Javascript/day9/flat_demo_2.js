let arr = [10, 20, [30, 40, [50, 60]]];

let result = arr.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
        return acc.concat(ele);  // FIX
    } else {
        acc.push(ele);
        return acc;
    }
}, []);

console.log(result);