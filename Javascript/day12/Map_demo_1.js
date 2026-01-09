let str = 'entertainment';

let resultObj = {}
for (char of str) {
    if (resultObj[char]) {
        resultObj[char] = resultObj[char] + 1;
    } else {
        resultObj[char] = 1;
    }
}
console.log(resultObj);


// using map
let charMap = new Map();
for (char of str) {
    if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1)
    } else {
        charMap.set(char, 1)
    }
}
console.log(charMap)