let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even_arr = arr.filter((ele) => ele % 2 == 0);
console.log(even_arr);

let odd_arr = arr.filter(function (value) {
    return value % 2 != 0;
});
console.log(odd_arr);