let str = 'entertainment';

// first/all non-repeated char
for (char of str) {
    if (str.indexOf(char) == str.lastIndexOf(char)) {
        console.log(char);
        break;
    }
}