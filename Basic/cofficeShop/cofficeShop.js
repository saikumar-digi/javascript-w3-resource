function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if (drink==='coffee') {
            resolve('order of coffee recived')
        }
        else{
            reject('other order rejected')
        }
    })
}

function processOrder(order){
 return new Promise(function(resolve){
    console.log('order is being Processed');
    resolve(`${order}  and is served`)
 })
}


// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProccessed = processOrder(orderPlaced)
//     return orderIsProccessed;
// }).then(function(processedOrder){
//     console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// })
//chaining  of promise 


// Async Await - keyword


// positive
// async function serveOrder (){
//     let orderPlaced = await placeOrder('coffee')
//     console.log(orderPlaced);
//     let processedOrder = await processOrder(orderPlaced)
//     console.log(processedOrder);
// }

// serveOrder()

// negetive
async function serveOrder (){
    try {
        let orderPlaced = await placeOrder('tea')
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
  
}

serveOrder()