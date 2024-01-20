const fs = require('fs')

console.log("first line");

let data = fs.readFileSync('f1.txt')
console.log(data.toString(), "file 1 data");


console.log('last line');