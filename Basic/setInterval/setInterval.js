
function hello(){
    console.log('hello');
}

let timer = setInterval(hello,1000)


function stop(){
    clearInterval(timer)
}
setTimeout(stop,5000)