const { error } = require('console');
const fs = require('fs')

console.log("first line");

// Sync  readFileSync
// let data = fs.readFileSync('f1.txt')
// console.log(data.toString(), "file 1 data");


// let data2 = fs.readFileSync('f2.txt')
// console.log(data2.toString(), "file 2 data");


fs.readFile("f1.txt",cb1)

function cb1(error,data){
    if (error) {
        console.log(error);
    }
    console.log('File 1 data->',data.toString());
    fs.readFile("f2.txt",cb2)

}



function cb2(error,data){
    if (error) {
        console.log(error);
    }
    console.log('File 2 data->',data.toString());
    fs.readFile("f3.txt",cb3)

}

function cb3(error,data){
    if (error) {
        console.log(error);
    }
    console.log('File 3 data->',data.toString());
}


console.log('last line');


