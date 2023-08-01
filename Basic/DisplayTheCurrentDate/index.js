// Write a JavaScript program to display the current day and time in the following format.
const today = new Date();
  const day = today.getDay();
  console.log(day);
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);


