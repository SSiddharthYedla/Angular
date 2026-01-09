console.log('Global code starts...')
function f1() {
    console.log(' I am f1...')
}
setTimeout(f1, 5000);

function f2() {
    for (let i = 1; i <= 500000; i++) {
        console.log('Helllooo ', i)
    }
}
f2()
console.log('Global code ends...')

// normal codes are executed , 500 ms