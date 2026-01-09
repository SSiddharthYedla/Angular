function add(a, b, c = 0) { // c=0 default param value
    console.log(a + b + c); // 10 + 20 + undefined
}
add(10, 20);
add(10, 20, 30);


function greet(msg, user = 'Guest') {
    console.log(`Hellloo ${user} , ${msg}`)
}
greet('Good Evening', 'charan')
greet('Good Evening')