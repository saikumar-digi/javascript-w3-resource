function addNumber(x,y){
  console.log(x+y);
}

addNumber(2,3)

let sumCurried = function(x){
    return function(y){
        console.log(x+y);
    }
}

let sumOfTwoNum = sumCurried(10)

sumOfTwoNum(3)