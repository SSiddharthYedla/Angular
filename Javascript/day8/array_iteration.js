let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];

// 1. for loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
console.log("==============")

// 2. for-in
for (i in cars) {
    console.log(cars[i])
}
console.log("==============")

// for-of
for (car of cars) {
    console.log(car)
}
console.log("==============")

// forEach()
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr)
})