function add2Nums(a, b) {
        console.log(a + b)
}
add2Nums(10, 20);


function add3Nums(a, b, c) {
        console.log(a + b + c)
}
add3Nums(10, 20, 30);

// write a function which should add N # arguments
function add(...arr) { // 10, 20, 30, 40, 50
        let sum = 0;
        for (let ele of arr) {
                sum += ele;
        }
        console.log(`sum :: ${sum}`)
}
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)