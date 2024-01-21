// produce a promise 

let myPromise = new Promise(function(resolve,reject){
    const a = 4 
    const b = 10
    setTimeout(()=>{
        if (a===b) {
            resolve('this is equal')
        }
        else{
            reject('value is not qual')
        }
    },2000)
})

//pending
// console.log(myPromise);

// fulfilled - then method

//consuming your promises
myPromise.then(function(data){
    console.log(data);
}) // fullfilled state

myPromise.catch(function(err){
    console.log(err);
}) //rejected state

