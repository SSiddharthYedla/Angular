const fs = require('fs');

console.log('GLobal Code starts here...')

fs.readFile('./day_13_notes.txt', (err, data) => {
    console.log(data.toString())
})
// let data = fs.readFileSync('./day_13_notes.txt')
// console.log(data.toString())

console.log('GLobal Code Continues-1...')
console.log('GLobal Code Continues-2...')
console.log('GLobal Code Continues-3...')
console.log('GLobal Code Continues-3...')
console.log('GLobal Code ends here...')

// read file-1   ---> read file-2   --> write into file-3\