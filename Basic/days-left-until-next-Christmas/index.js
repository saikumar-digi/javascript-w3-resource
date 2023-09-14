today=new Date();
const daysLeft=new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25) 
{
daysLeft.setFullYear(daysLeft.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((daysLeft.getTime()-today.getTime())/(one_day))} days left until Christmas!`);

//51
//Write a JavaScript program to convert a given number into hours and minutes.

function timeConvert(num)
 { 
  let hours = Math.floor(num / 60);  
  let minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(timeConvert(45));
console.log(timeConvert(763));
console.log(timeConvert(1235));


