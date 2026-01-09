console.log('Global code starts...')
function f1() {
    console.log(' I am f1...')
}
setTimeout(f1, 5000);
console.log('Global code ends...')

// normal codes are executed , 500 ms