const fs = require('fs');

fs.readFile('./file_1.txt', (err, file1Data) => {
    fs.readFile('./file_2.txt', (err, file2Data) => {
        fs.readFile('./file_3.txt', (err, file3Data) => {
            fs.writeFile('file4', data1, data2.data3, (err, data) => {
                console.log('Write is done')
            })
        })
    })
})