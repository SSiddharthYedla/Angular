console.time('myForLoop')
for (let i = 1; i <= 100000; i++) {
    console.log(`Hellooooo ${i}`);
}
console.timeEnd('myForLoop')