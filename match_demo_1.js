let str = 'Rain in spain mainly stays in the plAin';

let res1 = str.match(/ain/);
console.log(res1);

let res2 = str.match(/ain/g);
console.log(res2);

let res3 = str.match(/ain/gi);
console.log(res3);

let myStr = 'I have 14 pens and 16 pencils with me';
console.log(myStr.match(/[0-9]{1,2}/g))